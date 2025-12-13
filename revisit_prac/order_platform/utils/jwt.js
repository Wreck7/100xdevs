import jwt from "jsonwebtoken";

const JWT_SECRET = "your_super_secret_key"; // move to env later

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
};

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
