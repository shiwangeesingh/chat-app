const crypto = require("crypto");
const path = require("path");
const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
const { Types } = require("mongoose");
const {
  UserModel,
  verifyPassword,
  normalizeUserName,
  isHashedPassword
} = require("./userDb");
const { chatModel } = require("./chatDb");

const PORT = Number(process.env.PORT || 3000);
const APP_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";
const APP_SECRET = process.env.APP_SECRET || "replace-this-development-secret";
const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const MAX_MESSAGE_LENGTH = 2000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: APP_ORIGIN,
    methods: ["GET", "POST"]
  }
});

const activeUsers = new Map();
const requestBuckets = new Map();

app.use(
  cors({
    origin: APP_ORIGIN,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50kb" }));
app.use(express.static(path.join(__dirname, "dist", "my-chat-app")));

function createHttpError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

function asyncHandler(handler) {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
}

function createRateLimiter({ windowMs, limit }) {
  return (req, res, next) => {
    const key = `${req.ip}:${req.path}`;
    const now = Date.now();
    const bucket = requestBuckets.get(key);

    if (!bucket || now > bucket.resetAt) {
      requestBuckets.set(key, { count: 1, resetAt: now + windowMs });
      return next();
    }

    if (bucket.count >= limit) {
      return next(createHttpError(429, "Too many requests, please try again later."));
    }

    bucket.count += 1;
    next();
  };
}

function base64UrlEncode(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function base64UrlDecode(input) {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  const remainder = padded.length % 4;
  const withPadding = remainder === 0 ? padded : padded + "=".repeat(4 - remainder);
  return Buffer.from(withPadding, "base64").toString("utf8");
}

function signToken(payload) {
  const body = base64UrlEncode(JSON.stringify(payload));
  const signature = crypto.createHmac("sha256", APP_SECRET).update(body).digest("base64url");
  return `${body}.${signature}`;
}

function verifyToken(token) {
  if (!token || !token.includes(".")) {
    return null;
  }

  const [body, signature] = token.split(".");
  const expectedSignature = crypto.createHmac("sha256", APP_SECRET).update(body).digest("base64url");

  if (!signature || !expectedSignature || signature.length !== expectedSignature.length) {
    return null;
  }

  const isValid = crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
  if (!isValid) {
    return null;
  }

  const payload = JSON.parse(base64UrlDecode(body));
  if (!payload.exp || payload.exp < Date.now()) {
    return null;
  }

  return payload;
}

function createAuthToken(user) {
  return signToken({
    userId: String(user._id),
    name: user.name,
    exp: Date.now() + TOKEN_TTL_MS
  });
}

function readBearerToken(req) {
  const header = req.headers.authorization || "";
  if (!header.startsWith("Bearer ")) {
    return null;
  }

  return header.slice(7).trim();
}

function requireValidObjectId(value, fieldName) {
  if (!Types.ObjectId.isValid(value)) {
    throw createHttpError(400, `${fieldName} is invalid.`);
  }
}

function requireNonEmptyString(value, fieldName, maxLength = 2000) {
  const normalized = String(value || "").trim();
  if (!normalized) {
    throw createHttpError(400, `${fieldName} is required.`);
  }

  if (normalized.length > maxLength) {
    throw createHttpError(400, `${fieldName} is too long.`);
  }

  return normalized;
}

function authenticateRequest(req, res, next) {
  const token = readBearerToken(req);
  const payload = verifyToken(token);

  if (!payload) {
    return next(createHttpError(401, "Unauthorized."));
  }

  req.auth = payload;
  next();
}

io.use((socket, next) => {
  try {
    const { userId, token } = socket.handshake.query;
    requireValidObjectId(userId, "userId");

    const payload = verifyToken(token);
    if (!payload || payload.userId !== String(userId)) {
      return next(new Error("Unauthorized socket connection."));
    }

    socket.user = payload;
    next();
  } catch (error) {
    next(new Error(error.message || "Unauthorized socket connection."));
  }
});

io.on("connection", (socket) => {
  const userId = socket.user.userId;
  activeUsers.set(userId, socket.id);

  socket.on("disconnect", () => {
    const currentSocketId = activeUsers.get(userId);
    if (currentSocketId === socket.id) {
      activeUsers.delete(userId);
    }
  });

  socket.on("sendMessageFromSender", (data = {}) => {
    const recieverId = String(data.recieverId || "");
    if (!Types.ObjectId.isValid(recieverId)) {
      return;
    }

    if (String(data.senderId || "") !== userId) {
      return;
    }

    const targetSocketId = activeUsers.get(recieverId);
    if (!targetSocketId) {
      return;
    }

    io.to(targetSocketId).emit("sendMessageToReciever", {
      ...data,
      senderId: userId,
      message: String(data.message || "").slice(0, MAX_MESSAGE_LENGTH)
    });
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.post(
  "/login",
  createRateLimiter({ windowMs: 60 * 1000, limit: 20 }),
  asyncHandler(async (req, res) => {
    const name = requireNonEmptyString(req.body.name, "name", 50);
    const password = requireNonEmptyString(req.body.password, "password", 200);

    const user = await UserModel.findOne({ normalizedName: normalizeUserName(name) }).select("+password");
    if (!user || !verifyPassword(password, user.password)) {
      throw createHttpError(401, "Invalid credentials.");
    }

    if (!isHashedPassword(user.password)) {
      user.password = password;
      await user.save();
    }

    return res.status(200).json({
      data: user.toSafeObject(),
      token: createAuthToken(user)
    });
  })
);

app.post(
  "/signup",
  createRateLimiter({ windowMs: 60 * 1000, limit: 10 }),
  asyncHandler(async (req, res) => {
    const name = requireNonEmptyString(req.body.name, "name", 50);
    const password = requireNonEmptyString(req.body.password, "password", 200);

    if (password.length < 8) {
      throw createHttpError(400, "Password must be at least 8 characters long.");
    }

    const existingUser = await UserModel.findOne({ normalizedName: normalizeUserName(name) }).lean();
    if (existingUser) {
      throw createHttpError(409, "User already exists.");
    }

    const user = await UserModel.create({ name, password });

    return res.status(201).json({
      data: user.toSafeObject(),
      token: createAuthToken(user)
    });
  })
);

app.post(
  "/getAllUser",
  authenticateRequest,
  asyncHandler(async (req, res) => {
    const data = await UserModel.find({
      _id: { $ne: req.auth.userId }
    })
      .select("_id name createdAt updatedAt")
      .sort({ name: 1 })
      .lean();

    return res.status(200).json({ data });
  })
);

app.post(
  "/getChat",
  authenticateRequest,
  asyncHandler(async (req, res) => {
    const senderId = req.auth.userId;
    const recieverId = requireNonEmptyString(req.body.recieverId, "recieverId", 50);
    requireValidObjectId(recieverId, "recieverId");

    const chat = await chatModel
      .find({
        $or: [
          { recieverId, senderId },
          { recieverId: senderId, senderId: recieverId }
        ]
      })
      .sort({ createdAt: 1 })
      .lean();

    return res.status(200).json({ chat });
  })
);

app.post(
  "/sendMessage",
  authenticateRequest,
  createRateLimiter({ windowMs: 10 * 1000, limit: 50 }),
  asyncHandler(async (req, res) => {
    const senderId = req.auth.userId;
    const recieverId = requireNonEmptyString(req.body.recieverId, "recieverId", 50);
    const message = requireNonEmptyString(req.body.message, "message", MAX_MESSAGE_LENGTH);
    requireValidObjectId(recieverId, "recieverId");

    if (senderId === recieverId) {
      throw createHttpError(400, "You cannot send a message to yourself.");
    }

    const [sender, receiver] = await Promise.all([
      UserModel.findById(senderId).lean(),
      UserModel.findById(recieverId).lean()
    ]);

    if (!sender || !receiver) {
      throw createHttpError(404, "User not found.");
    }

    const chat = await chatModel.create({
      recieverId,
      senderId,
      senderName: sender.name,
      receiverName: receiver.name,
      message
    });

    return res.status(201).json({ chat });
  })
);

app.use((req, res, next) => {
  if (req.method === "GET") {
    return res.sendFile(path.join(__dirname, "dist", "my-chat-app", "index.html"));
  }

  return next(createHttpError(404, "Route not found."));
});

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = statusCode === 500 ? "Internal server error." : error.message;
  if (statusCode >= 500) {
    console.error(error);
  }

  res.status(statusCode).json({ message });
});

server.listen(PORT, () => {
  console.log(`Chat app listening on port ${PORT}`);
});
