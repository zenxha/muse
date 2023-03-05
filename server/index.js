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


app.get('/login', (req, res) => {
   user = req.params;
   const password = req.query.password;
  const username = req.query.username;
    /*
    // Query Database
    User = queryDB(id);
    */
    console.log("Recieved API request");
  console.log(`username: ${username}\npassword: ${password}`);
  console.log("\n")

  res.status(200).send('OK');

})

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
