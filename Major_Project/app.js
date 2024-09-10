const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const expressError = require("./utils/expressError.js");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://localhost:27017/wanderlust";

main()
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

// Middleware setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Listing Routes
app.use("/listings", listings);

// Review Routes
app.use("/listings/:id/reviews", reviews);

// Root route
app.get("/", (req, res) => {
  res.send("Hello, I am root.");
});

// 404 Error handler
app.all("*", (req, res, next) => {
  next(new expressError(404, "Page Not Found!"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
  // res.status(statusCode).send(message); // Uncomment this line if you don't have error.ejs for debugging.
});

// Server initialization
app.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});

// Gracefully handle MongoDB connection closure on app termination
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed due to app termination");
  process.exit(0);
});
