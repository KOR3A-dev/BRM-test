import {Router} from 'express';
import { 
    me,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/users.controller.js";
import { verifySignup, authJwt } from "../middlewares/index.js";

const router = Router();

router.get('/profile', authJwt.verifyToken, me);
router.post('/users/create', verifySignup.checkDuplicateUsernameOrEmail, createUser);
router.put('/users/update/:id', authJwt.verifyToken, updateUser);
router.delete('/users/delete/:id', authJwt.verifyToken, deleteUser);

export default router;
