const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Read
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, message: users });
  } catch (error) {
    console.log(error);
  }
});

// Create

router.post("/create", async (req, res) => {
  try {
    const { name, age, weight } = req.body;
    const user = new User({ name, age, weight });
    await user.save();
    res.json({ success: true, message: "User created!" });
  } catch (error) {
    console.log(error);
  }
});

// Update
router.put("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, weight } = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, { name, age, weight });

    if (!updatedUser) {
      res.json({
        success: false,
        message: "User not found!",
      });
    }
    res.json({
      success: true,
      message: updatedUser,
    });
  } catch (error) {
    console.log(error);
  }
});

// Delete User

router.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      res.json({
        success: false,
        message: "User not found!",
      });
    }
    res.json({
      success: true,
      message: "user deleted!",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
