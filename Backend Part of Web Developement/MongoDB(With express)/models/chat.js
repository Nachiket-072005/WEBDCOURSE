const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        MaxLength: 100,
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;