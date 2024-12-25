const express = require("express");
const app = express();
const dotenv = require("dotenv");
const users = require("./routes/users");
dotenv.config();

// Connect to MongoDB
const connectDB = require("./db");
connectDB();

app.use(express.json());

app.use("/api", users);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
