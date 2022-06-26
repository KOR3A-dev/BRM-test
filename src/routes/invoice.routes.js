import {Router} from 'express';

import { 
    create,
    getAll
} from "../controllers/invoice.controller.js";
import { authJwt } from "../middlewares/index.js";


const router = Router();

router.get('/invoices', authJwt.isAdmin, getAll);
router.post('/invoice/create', create);

export default router;
