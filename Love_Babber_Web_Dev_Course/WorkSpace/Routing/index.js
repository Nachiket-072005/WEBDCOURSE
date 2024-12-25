const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.sendFile("./dummy.html", { root: __dirname });
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/items", (req, res) => {
  res.json({ x: 1, y: 2 });
});

// app.post("/items", (req, res) => {
//   res.send("You are trying to create a new item");
// });

app.put("/items/:id", (req, res) => {
  res.send(`You are trying to update item with id ${req.params.id}`);
});

app.delete("/items/:id", (req, res) => {
  res.send(`You are trying to delete item with id ${req.params.id}`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
