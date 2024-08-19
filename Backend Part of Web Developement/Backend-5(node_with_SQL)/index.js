const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

// Setting up the view engine and views directory for ejs files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Setting up the static directory for css and js files
app.use(express.urlencoded({ extended: true }));

// Setting up the method override for patch requests
app.use(methodOverride("_method"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "N@chiket_2005",
  database: "Delta_app",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Inserting data into the database
// let q = "INSERT INTO users (id, username, email, password) VALUES ?";
// let data = [];
// for (let i = 1; i <= 10; i++) {
//   data.push(getRandomUser());
// }

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// Close the connection
// connection.end();

// console.log(getRandomUser());

// Fetching data from the database and rendering it to the home page using ejs
app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) FROM users";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.render("home.ejs", { count: result[0]["COUNT(*)"].toString() });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error occured in Database!");
  }
});

// Show all the users in the database
app.get("/users", (req, res) => {
  let q = "SELECT * FROM users";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // res.send(result);
      res.render("users.ejs", { users: result });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error occured in Database!");
  }
});

// Edit a username in the database using the id of the user and render the updated data to the users page using ejs
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM users WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.render("edit.ejs", { user: result[0] });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error occured in Database!");
  }
});

// Update the username in the database using the id of the user and render the updated data to the users page using ejs
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM users WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {  
      if (err) throw err;
      let user = result[0];
      if (formPass !== user.password) {
        res.send("Password is incorrect!");
        return;
      } else {
        let q2 = `UPDATE users SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          //   alert("Username updated successfully!");
          res.redirect("/users");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Some error occured in Database!");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
