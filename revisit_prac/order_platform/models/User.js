import mongoose from "mongoose";
import { z } from "zod";

// -----------------
// ZOD VALIDATION
// -----------------
export const userSchemaZod = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().optional(),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// -----------------
// MONGOOSE SCHEMA
// -----------------
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
