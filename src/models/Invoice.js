import {DataTypes} from 'sequelize';
import {sequelize} from '../databases/database.js';

export const Invoice = sequelize.define("invoices",{
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    date_buy: {
        type : DataTypes.DATE,
    },
    quantity_products: {
        type : DataTypes.INTEGER,
    },
    total_price: {
        type : DataTypes.STRING,
    },
    id_user : {
        type : DataTypes.INTEGER
    },
    id_products : {
        type : DataTypes.JSON   
    }
});