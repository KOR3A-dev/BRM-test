import {Router} from 'express';
import { 
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/users.controller.js";
import { authJwt } from "../middlewares/index.js";

const router = Router();

router.get('/users', getUsers);
router.get('/profile', [authJwt.verifyToken]);
router.post('/users/create', createUser);
router.put('/users/update/:id', updateUser);
router.delete('/users/delete/:id', deleteUser);

export default router;
