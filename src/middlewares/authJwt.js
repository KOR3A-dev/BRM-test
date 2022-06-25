import jwt from "jsonwebtoken";
import config from "../config.js";
import {User} from "../models/User.js";

export const verifyToken = async (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "token provided" });

    try {
        const payload = jwt.verify(token, config.SECRETJWT);
        req.userId = payload.id;

        const user = await User.findById(req.userId, { password: 0 });
        console.log(user);
        if (!user) return res.status(404).json({ message: "No user found" });

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized!" });
    }
}

export const isAdmin = async (req, res, next) => {
    try {
      const user = await User.findById(req.email);
  
      for (let i = 0; i < user.length; i++) {
        if (user[i].email === "admin@localhost") {
          next();
          return;
        }
      }
  
      return res.status(403).json({ message: "Require Admin!" });
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: error });
    }
};