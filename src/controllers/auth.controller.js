import {User} from '../models/User.js';
import jwt from 'jsonwebtoken';
import config from "../config.js";

export const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Creating a new User Object
        const newUser = new User({
          username,
          email,
          password,
        });
        
        const savedUser = await newUser.save();

        const token = jwt.sign({ id: savedUser._id }, config.SECRETJWT, {
            expiresIn: 86400, // 24 hours
        });

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json(error);
    }
}