const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const Post = require('../mongoose/models/post');


router.get("/", (req, res) => {
    res.send("No need for you to get all the posts breh");
})

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
        res.json(user);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
});

router.post("/create", async (req, res) => {
    const {title, content, authorID} = req.body;
    const post = new Post({title, content})
    console.log(req.body)
    res.send(req.body);
    try {
        post.save();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
})

module.exports = router;