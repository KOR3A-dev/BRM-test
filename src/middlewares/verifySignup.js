import {User} from "../models/User.js";

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ 
      where : {
        username: req.body.username
      }
    });
    if (user) return res.status(400).json({ message: "The username already exists" });
   
    const email = await User.findOne({
      where : {
        email: req.body.email
      } 
    });  
    if (email) return res.status(400).json({ message: "The email already exists" });

    next();

  } catch (error) {
    res.status(500).json({ message: error });
  }
};

