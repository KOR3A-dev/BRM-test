import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'BRM',
    'postgres',
    'Proyectos2022@**',
    {
        host : 'localhost',
        dialect : 'postgres'
    }
);