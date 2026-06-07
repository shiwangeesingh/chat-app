const { mongoose, conn } = require("./dbConnection");

const chatSchema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      index: true
    },
    recieverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      index: true
    },
    senderName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    receiverName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
    collection: "chat"
  }
);

chatSchema.index({ senderId: 1, recieverId: 1, createdAt: 1 });

exports.chatModel = conn.model("chat", chatSchema);
