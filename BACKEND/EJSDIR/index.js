const express = require("express");
const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/JS")));
app.use(express.static(path.join(__dirname, "/public/CSS")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice", {diceVal});
});

app.get("/ig/:username", (req, res) => {
    // const followers = ["adam", "bob", "steve", "abc"];
    let {username} = req.params;
    const instaData = require('./data.json');
    // console.log(instaData);
    // console.log(username);
    const data = instaData[username];
    // console.log(data);
    if(data) {
        res.render("instagram.ejs", {data}); // {username, followers}
    } else {
        res.render("error.ejs");
    }
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});