import {Router} from 'express';
import { 
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/products.controller.js";
import { authJwt } from "../middlewares/index.js";

const router = Router();

router.get('/products/:id', getProduct);
router.post('/products', [authJwt.verifyToken, authJwt.isAdmin], createProduct);
router.put('/products/:id', [authJwt.verifyToken, authJwt.isAdmin], updateProduct);
router.delete('/products/:id', [authJwt.verifyToken, authJwt.isAdmin], deleteProduct);

export default router;