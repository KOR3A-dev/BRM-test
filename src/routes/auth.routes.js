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
  
router.post(
  '/signUp',
  verifySignup.checkDuplicateUsernameOrEmail,
  signUp,
);
router.post('/signIn', signIn);

export default router;