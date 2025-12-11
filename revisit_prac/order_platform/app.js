
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.js"

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// connect database
connectDB();

// routes
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

app.use("/user", userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
