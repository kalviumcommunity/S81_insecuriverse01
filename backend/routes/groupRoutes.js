import express from "express";
import Group from "../models/Group.js";

const router = express.Router();

// Create a Group
router.post("/", async (req, res) => {
    try {
        const group = new Group(req.body);
        await group.save();
        res.status(201).json(group);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Groups
router.get("/", async (req, res) => {
    try {
        const groups = await Group.find();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a Group
router.put("/:id", async (req, res) => {
    try {
        const updatedGroup = await Group.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedGroup);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a Group
router.delete("/:id", async (req, res) => {
    try {
        await Group.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Group deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
