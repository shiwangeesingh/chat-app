const crypto = require("crypto");
const { mongoose, conn } = require("./dbConnection");

const HASH_ALGORITHM = "sha512";
const HASH_ITERATIONS = 100000;
const HASH_KEY_LENGTH = 64;

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto
    .pbkdf2Sync(password, salt, HASH_ITERATIONS, HASH_KEY_LENGTH, HASH_ALGORITHM)
    .toString("hex");

  return `${salt}:${hash}`;
}

function isHashedPassword(password) {
  return typeof password === "string" && password.includes(":");
}

function verifyPassword(password, storedPassword) {
  if (!storedPassword) {
    return false;
  }

  if (!isHashedPassword(storedPassword)) {
    return password === storedPassword;
  }

  const [salt, storedHash] = storedPassword.split(":");
  if (!salt || !storedHash) {
    return false;
  }

  const computedHash = crypto
    .pbkdf2Sync(password, salt, HASH_ITERATIONS, HASH_KEY_LENGTH, HASH_ALGORITHM)
    .toString("hex");

  if (storedHash.length !== computedHash.length) {
    return false;
  }

  return crypto.timingSafeEqual(Buffer.from(storedHash, "hex"), Buffer.from(computedHash, "hex"));
}

function normalizeUserName(name) {
  return String(name || "").trim().toLowerCase();
}

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50
    },
    normalizedName: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 200,
      select: false
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
    collection: "user"
  }
);

userSchema.pre("validate", function preValidate(next) {
  this.normalizedName = normalizeUserName(this.name);
  next();
});

userSchema.pre("save", function preSave(next) {
  if (!this.isModified("password")) {
    return next();
  }

  if (isHashedPassword(this.password)) {
    return next();
  }

  this.password = hashPassword(this.password);
  next();
});

userSchema.methods.toSafeObject = function toSafeObject() {
  return {
    _id: this._id,
    name: this.name,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

const UserModel = conn.model("user", userSchema);

exports.UserModel = UserModel;
exports.verifyPassword = verifyPassword;
exports.normalizeUserName = normalizeUserName;
exports.isHashedPassword = isHashedPassword;
