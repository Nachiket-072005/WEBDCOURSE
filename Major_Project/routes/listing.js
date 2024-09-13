const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const expressError = require("../utils/expressError.js");
const Listing = require("../models/listing.js");

// Middleware for validating the listing using Joi schema
const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new expressError(400, msg);
  } else {
    next();
  }
};

// Index Route - Show all listings
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

// New Route - Render form for creating new listing
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route - Show a specific listing
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      req.flash("error", "Listing that you have requested is not found!");
      res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  })
);

// Create Route - Create a new listing
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "Successfully created a new listing!");
    res.redirect(`/listings`);
  })
);

// Edit Route - Render form for editing a listing
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
      req.flash("error", "Listing that you have requested is not found!");
      res.redirect("/listings");
    }

    res.render("listings/edit.ejs", { listing });
  })
);

// Update Route - Update a specific listing
router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, {
      ...req.body.listing,
    });

    if (!listing) {
      throw new expressError(404, "Listing not found");
    }
    req.flash("success", "Successfully updated a listing!");
    res.redirect(`/listings/${id}`);
  })
);

// Delete Route - Delete a specific listing
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);

    if (!deletedListing) {
      throw new expressError(404, "Listing not found");
    }

    console.log("Deleted Listing: ", deletedListing);
    req.flash("success", "Successfully deleted a listing!");
    res.redirect("/listings");
  })
);

module.exports = router;
