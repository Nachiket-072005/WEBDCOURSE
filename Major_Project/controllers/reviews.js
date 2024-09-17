const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);

  let newReview = new Review(req.body.review);
  newReview.author = req.user._id; // Associate the review with the logged-in user
  listing.reviews.push(newReview); // Associate the review with the listing

  await newReview.save(); // Save the review
  await listing.save(); // Save the listing with the updated review
  req.flash("success", "Successfully created a new review!");
  // Redirect to the listing page after successful review creation
  res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req, res) => {
  const { id, reviewId } = req.params;

  // Remove the review from the listing's reviews array
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  req.flash("success", "Successfully deleted the review!");
  // Redirect back to the listing page after deleting the review
  res.redirect(`/listings/${id}`);
};
