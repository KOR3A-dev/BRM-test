import {Router} from 'express';
import { 
    signUp,
 } from "../controllers/auth.controller.js";

const router = Router();

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
  

//router.get('/me', me);
router.post('/signUp', signUp);

export default router;