const express = require("express");
const app = express();
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
dotenv.config();

// Connect to MongoDB
const connectDB = require("./config/db");
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", productRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
