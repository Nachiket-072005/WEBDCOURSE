const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

let posts = [
    {
        id: uuidv4(),
        username: 'John',
        content: 'Hello, World!'
    },
    {
        id: uuidv4(),
        username: 'Jane',
        content: 'Hi, there!'
    }, 
    {
        id: uuidv4(),
        username: 'Doe',
        content: 'Hey, everyone!'
    }
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.get('/posts', (req, res) => {
  res.render('index', { posts });
});

app.get('/posts/new', (req, res) => {
  res.render('new');
});

app.post('/posts', (req, res) => {
  const { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  // redirect to /posts route to see all posts
  res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  let post = posts.find( (p) => id === p.id);
  res.render('show', { post });
});

app.patch('/posts/:id', (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find( (p) => id === p.id);
  post.content = newContent;
  console.log(post);
  // res.send(`Patch request to /posts/${id}`);
  // res.render('show', { post });
  res.redirect('/posts');
});

app.get('/posts/:id/edit', (req, res) => {
  const { id } = req.params;
  let post = posts.find( (p) => id === p.id);
  res.render('edit', { post });
});

app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  posts = posts.filter( (p) => id !== p.id);
  res.redirect('/posts');
});