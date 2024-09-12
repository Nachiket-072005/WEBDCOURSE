const express = require("express");
const router = express.Router();

// Get all posts
router.get("/", (req, res) => {
  res.send("Getting all posts...");
});

// Create a new post
router.post("/", (req, res) => {
  res.send("Creating a new post...");
});

// Get a post by ID
router.get("/:id", (req, res) => {
  res.send("Getting a post by ID...");
});

// Update a post by ID

router.put("/:id", (req, res) => {
  res.send("Updating a post by ID...");
});

module.exports = router;
