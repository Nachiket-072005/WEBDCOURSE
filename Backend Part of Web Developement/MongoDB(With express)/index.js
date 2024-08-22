const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/whatsapp");
}

// Index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("index", { chats });
});

// New chat route
app.get("/chats/new", (req, res) => {
  res.render("new");
});

// Create chat route
app.post("/chats", (req, res) => {
  let { from, to, message } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    message: message,
    timestamp: new Date(),
  });
  newChat
    .save()
    .then(() => {
      console.log("Chat created");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats"); // Redirect to index route
});

// Edit chat route
app.get("/chats/:id/edit", async (req, res) => {
  let chat = await Chat.findById(req.params.id);
  res.render("edit", { chat });
});

// Update chat route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { message: newMessage } = req.body;
  console.log(newMessage);
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    {
      message: newMessage,
    },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

// Delete chat route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
