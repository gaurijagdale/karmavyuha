const express = require('express');
const router = express.Router();
const User = require('../models/Users.model');
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Replace with your actual secret key

// POST /login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;