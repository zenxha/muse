const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const User = require('../mongoose/models/user');


router.get("/", (req, res) => {
    res.send("No need for you to get all the users breh");
})

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
          return res.status(404).json({ error: 'Post not found' });
        }
        res.json(user);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
});

router.post("/create", async (req, res) => {
    const {name, email, password, age} = req.body;
    console.log("Creating user");
    const user = new User({name, email, password, age});
    console.log(req.body)
    res.send(req.body);
    try {
        await user.save();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
})

module.exports = router;