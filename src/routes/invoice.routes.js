import {Router} from 'express';
import { 
    create,
    getAll
} from "../controllers/invoice.controller.js";
import { authJwt } from "../middlewares/index.js";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Invoice
 *  description : Route User
 */

/**
 * @swagger
 *  /invoices :
 *  post : 
 *      description : invoices of the buy
 *      tags: [Invoice]
 *      response :
 *      '200' : 
 *          description : A successful response
 */
router.get('/invoices', authJwt.isAdmin, getAll);

/**
 * @swagger
 *  /invoices/create :
 *  post : 
 *      description : invoices of the buy created
 *      tags: [Invoice]
 *      response :
 *      '200' : 
 *          description : A successful response
 */
router.post('/invoice/create', create);

export default router;
