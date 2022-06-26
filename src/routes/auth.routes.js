import {Router} from 'express';
import { verifySignup } from "../middlewares/index.js";
import { 
  signUp,
  signIn
} from "../controllers/auth.controller.js";

const router = Router();

router.use((res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description : Route Auth
 */

/**
 * @swagger
 *  /signUp :
 *  post : 
 *      description : Sign up end point
 *      tags: [Auth]
 *      response :
 *      '200' : 
 *          description : A successful response
 */  
router.post(
  '/signUp',
  verifySignup.checkDuplicateUsernameOrEmail,
  signUp,
);

/**
 * @swagger
 *  /signIn :
 *  post : 
 *      description : Sign in end point
 *      tags: [Auth]
 *      response :
 *      '200' : 
 *          description : A successful response
 */
router.post('/signIn', signIn);

export default router;