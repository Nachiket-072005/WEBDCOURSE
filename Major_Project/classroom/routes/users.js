const express = require("express");
const router = express.Router();

// Get all users
router.get("/all", (req, res) => {
  res.send("Getting all users...");
});

// Create a new user
router.post("/", (req, res) => {
  res.send("Creating a new user...");
});

// Get a user by ID
router.get("/:id", (req, res) => {
  res.send("Getting a user by ID...");
});

// Update a user by ID
router.put("/:id", (req, res) => {
  res.send("Updating a user by ID...");
});

module.exports = router;
