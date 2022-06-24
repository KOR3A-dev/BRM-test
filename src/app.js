import express from 'express';
import userRoutes from './routes/users.routes.js';

const app = express();

//middlewwares
app.use(express.json());

//routes
app.use(userRoutes);

export default app;