import {User} from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        return res.status(500).json({ message: "an unexpected error has occurred"})
    }  
};

export const me = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({
            where: { 
                id
            },
        });

        if(!user) return res.status(404).json({ message: "The user with  this id no exists"})
        
        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: "an unexpected error has occurred"})
    }  
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const {username,email,password} = req.body;

        const user = await User.findByPk(id)
        
        user.username = username
        user.email = email
        user.password = password

        await user.save()

        res.json(user)
    } catch (error) {
        return res.status(500).json({ message: "an unexpected error has occurred"})
    }

}

export const deleteUser = async (req, res) => {
    try { 
        const { id } = req.params
        await User.destroy({
            where: {
                id,
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: "an unexpected error has occurred"})
    }
}

