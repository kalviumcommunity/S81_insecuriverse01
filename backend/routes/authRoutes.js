import express from "express";
import User from "../models/User.js";

const router = express.Router();

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

export default router;


