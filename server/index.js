const express = require('express');
const app = express();
const cors = require('cors')


const mongoose = require('mongoose');
const User = mongoose.model('User', {
username: String,
password: String
// Other fields here
});
const Post = mongoose.model('Post', {
userId: String,
content: String
// Other fields here
});

app.use(cors({

  }));

app.get('/test', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
  console.log("recieved request");
});



app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("Receieved Login Request")
  console.log(req.body)
  User.findOne({ username }, (err, user) => {
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

app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
    db.findById(id, (err, doc) => {
    if (err) {
    // Handle error
    }
    res.send(doc);
   });
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
  const userId = req.body.userId;
  const content = req.body.content;
  const post = new Post({ userId, content });
  post.save((err) => {
    if (err) {
    // Handle error
    }
    res.send(post);
  });
});
const port = 3001 || 5000; // process.env.PORT
app.listen(port, () => console.log(`Server running on port ${port}`));
