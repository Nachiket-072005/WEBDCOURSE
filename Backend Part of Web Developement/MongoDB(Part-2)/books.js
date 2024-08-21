const mongoose = require("mongoose");

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [0, "Price is too low for Amazon"], // Custom error message
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction", "biography"],
  },
  genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate(
  "66c48d49502ca0900b57755c",
  { price: -200 },
  { runValidators: true, new: true }
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });

// let book1 = new Book({
//     title: "Marvel Comics",
//     author: "Stan Lee",
//     price: 100,
//     category: "fiction",
//     genre: ["action", "adventure"],
// });

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });
