const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Middleware to parse the body of the request and extract the data from it.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/register', (req, res) => {
  let { user, password } = req.query;
  res.send(`Standard GET response with username: ${user} and password: ${password}`);
});

app.post('/register', (req, res) => {
  let { user, password } = req.body;
  res.send("Standard POST response with username: " + user + " and password: " + password);
});