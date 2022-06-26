import {User} from "../models/User.js";
import bcrypt from "bcryptjs";

export const createAdmin = async () => {
  // check for an existing admin user
  const user = await User.findOne({ email: "admin@localhost" });

  if (!user) {
    // create a new admin user
    await User.create({
      username: "admin",
      email: "admin@localhost",
      roles : "administrador",
      password: await bcrypt.hash("admin", 10),
    });
  }
  };
