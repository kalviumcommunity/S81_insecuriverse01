const mongoose = require("mongoose");

const reelSchema = new mongoose.Schema({
    title: { type: String, required: true },
    videoUrl: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
    likes: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Reel", reelSchema);
