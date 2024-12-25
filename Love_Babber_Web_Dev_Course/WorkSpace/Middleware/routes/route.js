const express = require("express");
const router = express.Router();

// Middleware
const auth = (req, res, next) => {
  console.log("I am inside auth middleware");

  req.user = {
    role: "admin",
    id: 1,
  };

  if (req.user) {
    next();
  } else {
    res.json({ success: false, message: "Not a valid user!" });
  }
};

const isStudent = (req, res, next) => {
  console.log("I am inside student middleware");

  if (req.user.role === "student") {
    next();
  } else {
    res.json({ success: false, message: "Not a student!" });
  }
};

const isAdmin = (req, res, next) => {
  console.log("I am inside admin middleware");

  if (req.user.role === "admin") {
    next();
  } else {
    res.json({ success: false, message: "Not an admin!" });
  }
};

// Routes

router.get("/student", auth, isStudent, (req, res) => {
  res.send("Welcome Student!");
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.send("Welcome Admin!");
});

module.exports = router;
