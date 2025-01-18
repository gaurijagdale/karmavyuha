const express = require('express');

const router = express.Router();

// POST /login
router.post("/login", (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;


console.log(email, password);
    res.json({ message: "Login route" });
});

module.exports = router;