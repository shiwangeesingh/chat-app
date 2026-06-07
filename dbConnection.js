const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/chat-app";

const conn = mongoose.createConnection(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
});

conn.on("connected", () => {
  console.log("MongoDB connected");
});

conn.on("error", (error) => {
  console.error("MongoDB connection error:", error.message);
});

exports.mongoose = mongoose;
exports.conn = conn;
