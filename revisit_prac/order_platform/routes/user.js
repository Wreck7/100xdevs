import express from "express";
import User, { userSchemaZod } from "../models/User.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    // Validate with Zod
    const parsedData = userSchemaZod.parse(req.body);

    // Check if email already exists
    const exists = await User.findOne({ email: parsedData.email });

    if (exists) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    const user = await User.create(parsedData);

    res.json({ message: "User created", user });

  } catch (err) {
    res.status(400).json({ error: err.errors || err.message });
  }
});

export default router;
