import {Router} from 'express';
import { 
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/products.controller.js";
import { authJwt } from "../middlewares/index.js";

const router = Router();

router.get('/admin/product/:id', authJwt.isAdmin, getProduct);
router.get('/admin/products', authJwt.isAdmin, getProducts);
router.post('/admin/products/create', authJwt.isAdmin, createProduct);
router.put('/admin/products/update/:id', authJwt.isAdmin, updateProduct);
router.delete('/admin/products/destroy/:id', authJwt.isAdmin, deleteProduct);

export default router;