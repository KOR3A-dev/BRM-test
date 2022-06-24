import express from 'express';
import userRoutes from './routes/users.routes.js';
import productRoutes from './routes/products.routes.js';

const app = express();

//middlewwares
app.use(express.json());

//routes
app.use(userRoutes);
app.use(productRoutes);


export default app;