import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerJsUi from 'swagger-ui-express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import userRoutes from './routes/users.routes.js';
import productRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';
import invoiceRoutes from './routes/invoice.routes.js';

import {createAdmin} from "./libs/setup.js";

const app = express();
createAdmin();

const swaggerOptions = {
    swaggerDefinition: {
        info : {
            title : 'BRM PRUEBA BACKEND',
            description : 'Registro Datos básicos y login de usuarios. Los usuarios deben tener un rol Administrador o Cliente Administrador CRUD de productos del inventario, cada producto debe tener las siguientes especificaciones Número de lote Nombre Precio Cantidad disponible Fecha de ingreso. Visualización de compras realizadas por los clientes, debe incluir fecha de la compra, cliente, productos comprados, cantidad por producto y el precio total de la compra, Cliente Módulo de compras, donde se puedan agregar 1 o varios productos y la cantidad por cada producto. Visualización de una factura donde salga la información completa de la compra. Historial de productos comprados',
            contact : {
                name : 'Alejandro valencia',
            },
            servers : ["http://localhost:3000"]
        }
    },
    apis : [`${path.join(__dirname, "./routes/*.js")}`],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerJsUi.serve, swaggerJsUi.setup(swaggerDocs))


//middlewares
app.use(express.json());

//routes
app.use(userRoutes);
app.use(authRoutes);
app.use(productRoutes);
app.use(invoiceRoutes);


export default app;




