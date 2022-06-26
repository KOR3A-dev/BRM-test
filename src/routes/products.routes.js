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

/**
 * @swagger
 * tags:
 *  name: Product
 *  description : Route Product
 */

/**
 * @swagger
 *  /admin/product/:id :
 *  get : 
 *      description : User to request all products
 *      tags: [Product]
 *      response :
 *      '200' : 
 *          description : A successful response
 */
router.get('/admin/product/:id', authJwt.isAdmin, getProduct);

/**
 * @swagger
 *  /admin/products/:id :
 *  get : 
 *      description : product to request for id product
 *      tags: [Product]
 *      response :
 *      '200' : 
 *          message : A successful response
 */
router.get('/admin/products', authJwt.isAdmin, getProducts);

/**
 * @swagger
 *  /admin/products/create :
 *  post : 
 *      description : product create
 *      tags: [Product]
 *      response :
 *      '201' : 
 *          message : A successful response
 */
router.post('/admin/products/create', authJwt.isAdmin, createProduct);

/**
 * @swagger
 *  /admin/products/update/:id :
 *  put : 
 *      description : product update
 *      tags: [Product]
 *      response :
 *      '200' : 
 *          description : A successful response
 */
router.put('/admin/products/update/:id', authJwt.isAdmin, updateProduct);

/**
 * @swagger
 *  /admin/products/destroy/:id :
 *  post : 
 *      description : product destroy
 *      tags: [Product]
 *      response :
 *      '200' : 
 *          description : A successful response
 */
router.delete('/admin/products/destroy/:id', authJwt.isAdmin, deleteProduct);

export default router;