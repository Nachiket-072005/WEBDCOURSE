const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

router.get("/products", getProducts);
router.post("/products", createProduct);
router.get("/products/:id", getProductById);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);

module.exports = router;
