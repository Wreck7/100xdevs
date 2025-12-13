// import express from "express";
// import User, { userSchemaZod } from "../models/User.js";

// const router = express.Router();

// router.post("/create", async (req, res) => {
//   try {
//     // Validate with Zod
//     const parsedData = userSchemaZod.parse(req.body);

//     // Check if email already exists
//     const exists = await User.findOne({ email: parsedData.email });

//     if (exists) {
//       return res.status(400).json({ error: "User already exists" });
//     }

//     // Create new user
//     const user = await User.create(parsedData);

//     res.json({ message: "User created", user });

//   } catch (err) {
//     res.status(400).json({ error: err.errors || err.message });
//   }
// });

// export default router;




import express from "express";
import User from "../models/User.js";
import { userSchemaZod } from "../models/User.js";
import { generateToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";
import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router();

// ---------------------
// REGISTER
// ---------------------
router.post("/signup", async (req, res) => {
  try {
    const parsedData = userSchemaZod.parse(req.body);

    // Check duplicate
    const exists = await User.findOne({ email: parsedData.email });
    if (exists) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create (password auto-hashed in model)
    const user = await User.create(parsedData);

    res.json({ message: "User created", user });
  } catch (err) {
    res.status(400).json({ error: err.errors || err.message });
  }
});

// ---------------------
// LOGIN
// ---------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    // Generate JWT
    const token = generateToken(user);

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ---------------------
// PROTECTED EXAMPLE ROUTE
// ---------------------
router.get("/profile", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

export default router;
