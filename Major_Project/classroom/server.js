const express = require("express");
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.use("/users", users);
app.use("/posts", posts);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
  secret: "mysupersecret",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`Request count: ${req.session.count} times.`);
// });

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  if (name === "anonymous") {
    req.flash("error", "You are not registered!");
  } else {
    req.flash("success", "You are registered successfully!");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  res.render("page.ejs", { name: req.session.name });
});

app.get("/", (req, res) => {
  res.send("Hello, I am root.");
});

// app.get("/test", (req, res) => {
//   res.send("Test Successful!");
// });

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
