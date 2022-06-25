import {User} from '../models/User.js';
import config from "../config.js";

import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Creating a new User Object
        const newUser = new User({
          username,
          email,
          password: await bcrypt.hash(password, 10),
        });
        
        const savedUser = await newUser.save();

        const token = jwt.sign({ id: savedUser.id }, config.SECRETJWT, {
            expiresIn: 86400, // 24 hours
        });

        return res.status(200).json({newUser, token });
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) return res.status(400).json({ message: "User Not Found" });
        const token = jwt.sign(
            {
                email: user.email,
                password: user.password,
            }, 
            config.SECRETJWT,
            {
                expiresIn: 86400, // 24 hours
            }
        );
      
        res.json({ 
            user,
            message: "Auth successfully, welcome!",
            token
        });
    } catch (error) {
        console.log(error);
       return res.status(500).json({ message: "an unexpected error has occurred"}); 
    }
}
  