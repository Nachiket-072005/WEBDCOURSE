const express = require("express");
const router = express.Router({ mergeParams: true });
const expressError = require("../utils/expressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

// Middleware to validate review data using Joi schema
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new expressError(400, msg);
  } else {
    next();
  }
};

// Route to create a new review
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);

    // Check if the listing exists
    if (!listing) {
      throw new expressError(404, "Listing not found");
    }

    const newReview = new Review(req.body.review);
    listing.reviews.push(newReview); // Associate the review with the listing

    await newReview.save(); // Save the review
    await listing.save(); // Save the listing with the updated review
    req.flash("success", "Successfully created a new review!");
    // Redirect to the listing page after successful review creation
    res.redirect(`/listings/${listing._id}`);
  })
);

// Route to delete a review
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;

    // Find the listing and ensure it exists
    const listing = await Listing.findById(id);
    if (!listing) {
      throw new expressError(404, "Listing not found");
    }

    // Remove the review from the listing's reviews array
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

    // Find and delete the review
    const deletedReview = await Review.findByIdAndDelete(reviewId);

    // Check if the review was successfully deleted
    if (!deletedReview) {
      throw new expressError(404, "Review not found");
    }
    req.flash("success", "Successfully deleted the review!");
    // Redirect back to the listing page after deleting the review
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
