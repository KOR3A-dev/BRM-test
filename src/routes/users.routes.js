import {Router} from 'express';
import { 
    me,
    updateUser,
    deleteUser
} from "../controllers/users.controller.js";
import { authJwt } from "../middlewares/index.js";

const router = Router();

router.get('/profile', authJwt.verifyToken, me);
router.put('/users/update/:id', authJwt.verifyToken, updateUser);
router.delete('/users/delete/:id', authJwt.verifyToken, deleteUser);

export default router;
