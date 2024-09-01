const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection Successful!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "John Doe",
    addresses: [
      { location: "Main Street", city: "New York" },
      { location: "Broadway", city: "Los Angeles" },
    ],
  });

  user1.addresses.push({ location: "Wall Street", city: "New York" });
  let res = await user1.save();
  console.log(res);
};

addUsers();
