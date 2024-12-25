const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 25,
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = model("User", userSchema);

module.exports = User;
