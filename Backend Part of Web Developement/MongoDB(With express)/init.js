const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

// Main Code
// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/whatsapp");
// }

async function main() {
  await mongoose.connect("mongodb://localhost:27017/fakewhatsapp");
}

let chats = [
  {
    from: "Alice",
    to: "Bob",
    message: "Hello Bob",
    timestamp: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "Hello Alice",
    timestamp: new Date(),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "How are you?",
    timestamp: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "I am fine",
    timestamp: new Date(),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "Good to hear that",
    timestamp: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "What about you?",
    timestamp: new Date(),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "I am doing good",
    timestamp: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "That's great",
    timestamp: new Date(),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "I will call you later",
    timestamp: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "Sure",
    timestamp: new Date(),
  },
];

Chat.insertMany(chats);
