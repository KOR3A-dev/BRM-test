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
          roles : "cliente",
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
        const {email, password } = req.body;

        const userverify = await User.findOne({
            where : {
                email: email,
                password : password //pendiente por desencriptar bcrypt.compare
            }
        });
        console.log(req.body);
        console.log(userverify);

        if (!userverify) return res.status(400).json({ message: "User incorrect o not exist" });

        const token = jwt.sign(
            {
                email: userverify.email,
                password: userverify.password,
            }, 
            config.SECRETJWT,
            {
                expiresIn: 86400, // 24 hours
            }
        );
      
        res.json({ 
            message: "Auth successfully, welcome!",
            token,
        });
    } catch (error) {
        console.log(error);
       return res.status(500).json({ message: "an unexpected error has occurred"}); 
    }
}
  