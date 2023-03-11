const express = require('express');
const session = require('express-session')
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')


const mongoose = require('mongoose');
const User = require('./mongoose/models/user');
const Post = require('./mongoose/models/post')
const usersRouter = require('./routes/userAPI')
const postsRouter = require('./routes/postAPI')

mongoose.connect('mongodb://localhost/muse');

// const postsCollection = mongoose.db().createCollection('posts');

app.use(cors({}));
app.use(session({
  secret: 'jiwon',
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);


app.get('/test', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
  console.log("recieved request");
});



app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("Receieved Login Request")
  console.log(req.body)
  User.findOne({ username }, (err, npuser) => {
  if (err || !user) {
  return res.status(401).json({ error: 'User not found' });
  }
  
  // Check the password
  if (user.password === password) {
    // Set up the session
    req.session.user = user;
    return res.json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ error: 'Incorrect password' });
  }
  });
  });



app.get('/getPost/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const post = await Post.findById(req.params.id).populate('author');
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
});


app.post('/createUser', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = new User({ username, password });
  user.save((err) => {
  if (err) {
  // Handle error
  }
  res.send(user);
  });
  });
  
app.post('/createPost', (req, res) => {
  const title = req.body.title;
  const userId = req.body.userId;
  const content = req.body.content;
  const post = new Post({ userId, content });
  console.log(req.body)
  // post.save((err) => {
  //   if (err) {
  //   // Handle error
  //   }
  //   res.send(post);
  // });
  
});
const port = 3001 || 5000; // process.env.PORT
app.listen(port, () => console.log(`Server running on port ${port}`));
