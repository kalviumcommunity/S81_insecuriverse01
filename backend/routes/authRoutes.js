const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password, insecurities } = req.body;
        const user = new User({ name, email, password, insecurities });
        await user.save();
        res.status(201).json({ message: "User Created" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;


