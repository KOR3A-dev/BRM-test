import jwt from "jsonwebtoken";
import config from "../config.js";
import {User} from "../models/User.js";

export const verifyToken = async (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "token provided" });

    try {
        const payload = jwt.verify(token, config.SECRET);
        req.id = payload.id;

        const user = await User.findById(req.id, { password: 0 });
        if (!user) return res.status(404).json({ message: "No user found" });

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized!" });
    }
}