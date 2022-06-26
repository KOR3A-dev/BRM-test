import {Router} from 'express';
import { 
    me,
    updateUser,
    deleteUser
} from "../controllers/users.controller.js";
import { authJwt } from "../middlewares/index.js";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: User
 *  description : Route User
 */

/**
 * @swagger
 *  /profile :
 *  post : 
 *      description : Profile end point
 *      tags : [User]
 *      response :
 *      '200' : 
 *          description : A successful response
 */  
router.get('/profile', authJwt.verifyToken, me);

/**
 * @swagger
 *  /users/update/:id :
 *  put : 
 *      description : User update data
 *      tags : [User]          
 *      response :
 *      '200' : 
 *          description : A successful response
 */  
router.put('/users/update/:id', authJwt.verifyToken, updateUser);

/**
 * @swagger
 *  /users/delete/:id :
 *  delete : 
 *      description : User update data
 *      tags : [User]
 *      response :
 *      '204' : 
 *          description : A successful response
 */ 
router.delete('/users/delete/:id', authJwt.verifyToken, deleteUser);

export default router;
