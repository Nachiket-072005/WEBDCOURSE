const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const Listing = require("./models/listing");
const { url } = require("inspector");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.use(methodOverride("_method"));

const MONGO_URL = "mongodb://localhost:27017/wanderlust";

main()
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);

app.get("/", (req, res) => {
  res.send("Hello, I am root.");
});

app.get("/testListing", async (req, res) => {
  const sampleListing = new Listing({
    title: "Test Listing",
    description: "This is a test listing.",
    image: "https://via.placeholder.com/150",
    price: 100,
    location: "Test Location",
    country: "Test Country",
  });

  await sampleListing.save();
  console.log("Test listing created!");
  res.send("Test listing created!");
});

// Index Route
app.get("/listings", async (req, res) => {
   const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

// Create Route
app.post("/listings", async (req, res) => {
  const { title, description, image, price, location, country } = req.body;
  const newListing = new Listing({
    title,
    description,
    image,
    price,
    location,
    country,
  });
  await newListing.save();
  res.redirect(`/listings`);
});

// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

// Update Route
app.put("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, image, price, location, country } = req.body;
  const updatedListing = await Listing.findByIdAndUpdate(id, {
    title,
    description,
    image,
    price,
    location,
    country,
  });
  res.redirect(`/listings/${id}`);
});

// Delete Route
app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log("Deleted Listing: ", deletedListing);
  res.redirect("/listings");
});

app.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});
