const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection Successful!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async () => {
  let res = await Customer.find({}).populate("orders");
  console.log(res);
};

findCustomer();

const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Rahul Kumar",
  });

  let order1 = await Order.findOne({ item: "Samsung Galaxy S10" });
  let order2 = await Order.findOne({ item: "iPhone 11" });
  let order3 = await Order.findOne({ item: "OnePlus 7T" });

  cust1.orders.push(order1);
  cust1.orders.push(order2);
  cust1.orders.push(order3);

  let res = await cust1.save();
  console.log(res);
};

// addCustomer();

const addOrders = async () => {
  let res = await Order.insertMany([
    { item: "Samsung Galaxy S10", price: 700 },
    { item: "iPhone 11", price: 1000 },
    { item: "OnePlus 7T", price: 600 },
  ]);

  console.log(res);
};

// addOrders();
