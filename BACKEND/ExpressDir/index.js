const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("You contacted with root path.");
});
app.get("/apple", (req, res) => {
    res.send("You contacted with an apple path.");
});
app.get("/orange", (req, res) => {
    res.send("You contacted with an orange path.");
});
app.get("*", (req, res) => {
    res.send("This path doesn't exists.");
});
app.post("/", (req, res) => {
    res.send("You sent a post request to root path.");
});
app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    res.send("Hello, I am root.");
});
app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("no results");
});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
// });