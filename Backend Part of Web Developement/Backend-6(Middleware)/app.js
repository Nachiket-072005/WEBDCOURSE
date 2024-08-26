const { error } = require("console");
const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("I am a 1st middleware function");
//   next();
//   console.log("I am a 1st middleware function after next"); // Not Proper way to write code
// });

// app.use((req, res, next) => {
//   console.log("I am a 2nd middleware function");
//   next();
// });

// app.use("/random", (req, res, next) => {
//   console.log("I am only for random route");
//   next();
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new Error("Access Denied!");
};

// app.use("/api", checkToken);

// Creating utility middleware function
// const logger = (req, res, next) => {
//   req.time = new Date(Date.now()).toString().split(" ")[4];
//   console.log(
//     req.method,
//     req.url,
//     req.time,
//     req.ip,
//     req.hostname,
//     req.path,
//     req.query
//   );
//   next();
// };

// app.use(logger);

app.get("/api", checkToken, (req, res) => {
  res.send("Hello, I am an API route");
});

app.get("/", (req, res) => {
  res.send("Hello, I am a root route");
});

app.get("/random", (req, res) => {
  res.send("Hello, I am a random route");
});

// 404 Middleware
app.use((req, res, next) => {
  res.status(404).send("Page not found!");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
