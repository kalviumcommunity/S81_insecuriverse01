const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoute= require("./routes/authRoutes")
const groupRoutes = require("./routes/groupRoutes");

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
