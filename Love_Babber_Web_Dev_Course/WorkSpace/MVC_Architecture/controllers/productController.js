const Product = require("../models/productModel");

// Business Logic
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No products found" });
    }
    res.json({ success: true, products: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create Products
const createProduct = async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
    });
    const newProduct = await product.save();
    res.status(201).json({ success: true, product: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Single Product

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, product: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Product
const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    let product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        category,
      },
      { new: true }
    );
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    const updatedProduct = await product.save();

    res.json({ success: true, product: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Product

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.json({
        success: false,
        message: "Product not found",
      });
    }
    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  updateProduct,
};
