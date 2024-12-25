const express = require("express");
const app = express();
const routes = require("./routes/route");

app.use(express.json());

// Middleware - logging, Auth, Validation

const log = (req, res, next) => {
  console.log("Logging...");
  next();
};

const auth = (req, res, next) => {
  console.log("Authenticating...");
  next();
};

const validate = (req, res, next) => {
  console.log("Validating...");
  next();
};

// app.use(log);
// app.use(auth);
// app.use(validate);
app.use("/api", routes);

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
