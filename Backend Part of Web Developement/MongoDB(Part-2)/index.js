const mongoose = require("mongoose");

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// Create a schema for User with fields name, email, age and export it as User model using mongoose
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create a model User using the userSchema and export it
const User = mongoose.model("User", userSchema);

const user1 = new User({ name: "John", email: "john@gmail.com", age: 25 });
const user2 = new User({ name: "Jane", email: "jane@gmail.com", age: 30 });

// Save the user1 and user2 to the database
user1.save();
// Save the user2 to the database using promise and handle the success and error case using then and catch method
user2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Insert multiple users to the database using insertMany method and handle the success and error case using then and catch method
User.insertMany([
  { name: "Tony", email: "tony@gmail.com", age: 25 },
  { name: "Peter", email: "peter@gmail.com", age: 30 },
  { name: "Doe", email: "doe@gmail.com", age: 35 },
]).then((res) => {
  console.log(res);
});

// Fetch all the users from the database using find method and handle the success and error case using then and catch method
User.find({ age: { $gt: 25 } })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Fetch the first user from the database using findOne method and handle the success and error case using then and catch method
User.findOne({ _id: "66c344e4b92919e731aaf30d" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Fetch the user by id from the database using findById method and handle the success and error case using then and catch method
User.findById("66c344e4b92919e731aaf30d")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Update the user by name from the database using updateOne method and handle the success and error case using then and catch method
User.updateOne({ name: "Tony" }, { age: 26 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Update the user by age from the database using updateMany method and handle the success and error case using then and catch method

User.updateMany({ age: { $gt: 25 } }, { age: 36 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Update the user by name from the database using findOneAndUpdate method and handle the success and error case using then and catch method
User.findOneAndUpdate({ name: "Tony" }, { age: 40 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.findOneAndUpdate({ name: "Tony" }, { age: 40 }, { new: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Delete the user by name from the database using deleteOne method and handle the success and error case using then and catch method
User.deleteOne({ name: "Tony" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Delete the user by age from the database using deleteMany method and handle the success and error case using then and catch method
User.deleteMany({ age: 25 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Delete the user by age from the database using findOneAndDelete method and handle the success and error case using then and catch method
User.findOneAndDelete({ age: 36 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Delete the user by id from the database using findByIdAndDelete method and handle the success and error case using then and catch method
User.findByIdAndDelete({ _id: "66c344e4b92919e731aaf30d" }, { age: 36 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
