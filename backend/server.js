import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/authRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.mongo_url)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/auth", authRoute);
app.use("/api/groups", groupRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
