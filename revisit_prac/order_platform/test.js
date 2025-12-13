// import User from "./models/User.js";

// console.log("User model loaded:", User);




import mongoose from "mongoose";
import User from "./models/User.js";
import "./config/db.js"; // if db.js connects mongoose automatically

const run = async () => {
  try {
    const u = await User.create({
      name: "Test",
      age: 20,
      email: "test@example.com",
      password: "123456",
    });

    console.log("Created user:", u);
  } catch (err) {
    console.error("ERR:", err);
  } finally {
    mongoose.connection.close();
  }
};

run();
