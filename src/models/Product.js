import {DataTypes} from 'sequelize';
import {sequelize} from '../databases/database.js';

export const Product = sequelize.define("products",{
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name: {
        type : DataTypes.STRING,
    },
    number_lote: {
        type : DataTypes.INTEGER,
    },
    price: {
        type : DataTypes.STRING,
    },
    available_quantity: {
        type : DataTypes.INTEGER,
    },
    date_entry: {
        type : DataTypes.DATE,
    },
});