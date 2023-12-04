let express = require("express");
let app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log("Request recevied.");
//     res.send({
//         name: "Apple",
//         color: "red"
//     });
// });

app.get("/", (req, res) => {
    res.send("Hello, I am root.");
});

app.get("/apple", (req, res) => {
    res.send("You connected with apple path.");
});

app.get("/orange", (req, res) => {
    res.send("You connected with orange path.");
});

app.post("/", (req, res) => {
    res.send("You connected with post path.");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`;
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send(`<h1>Nothing Search</h1>`)
    }
    res.send(`<h1>Search for a query : ${q}</h1>`);
})