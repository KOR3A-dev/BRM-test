import express from 'express';
import userRoutes from './routes/users.routes.js';
import productRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';

import {createAdmin} from "./libs/setup.js";

const app = express();
createAdmin();

//middlewares
app.use(express.json());

//routes
app.use(userRoutes);
app.use(authRoutes);
app.use(productRoutes);

export default app;