const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice", {diceVal});
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    // console.log(username);
    res.render("instagram.ejs", {username});
})
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});