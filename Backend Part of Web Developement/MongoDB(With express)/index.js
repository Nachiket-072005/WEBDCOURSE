const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");
const { wrap } = require("module");

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

// Main Code
// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/whatsapp");
// }

async function main() {
  await mongoose.connect("mongodb://localhost:27017/fakewhatsapp");
}

// Index route
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index", { chats });
  } catch (error) {
    next(error);
  }
});

// New chat route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError("Not Found", 404);
  res.render("new");
});

// Create chat route
app.post("/chats", (req, res) => {
  try {
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
        next(err);
      });
    res.redirect("/chats"); // Redirect to index route
  } catch (error) {
    console.log(error);
  }
});

// Error Handling Middleware for async functions
function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}

// New Show route
app.get(
  "/chats/:id",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      return next(new ExpressError("Chat not found", 404));
    }
    res.render("edit.ejs", { chat });
  })
);

// Edit chat route
app.get(
  "/chats/:id/edit",
  wrapAsync(async (req, res) => {
    let chat = await Chat.findById(req.params.id);
    res.render("edit", { chat });
  })
);

// Update chat route
app.put("/chats/:id", async (req, res) => {
  try {
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
  } catch (error) {
    next(error);
  }
});

// Delete chat route
app.delete("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
  } catch (error) {
    next(error);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const handleValidationError = (err) => {
  console.log("This was a Validation Error. Please fill in all the fields.");
  console.dir(err.message);
  return err;
};

app.use((err, req, res) => {
  if (err.name == "ValidationError") {
    err = handleValidationError(err);
  }
  next(err);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
