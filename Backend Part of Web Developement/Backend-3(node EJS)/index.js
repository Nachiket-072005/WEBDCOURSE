const express = require('express');
const app = express();
const path = require('path');

const port = 8080;

app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.render('home');
    });

app.get('/about', (req, res) => {
    res.send("This is the about page");
    });

app.get('/rolldice', (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice', { diceVal });
    });

// app.get('/ig/:username', (req, res) => {
//     const followers = ['john', 'jane', 'doe', 'smith'];
//     let { username } = req.params;
//     res.render('instagram', { username, followers });
//     });

app.get('/ig/:username', (req, res) => {
    let { username } = req.params;
    let instaData = require('./data.json');
    let data = instaData[username];
    if(data) {
        res.render('instagram', { data });
    } else {
        res.render('notfound', { username });
    }
    });
