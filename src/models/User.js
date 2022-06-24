import {DataTypes} from 'sequelize';
import {sequelize} from '../databases/database.js';

export const User = sequelize.define("users",{
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name: {
        type : DataTypes.STRING,
    },
    cc: {
        type : DataTypes.INTEGER,
    },
    email: {
        type : DataTypes.STRING,
    },
    password: {
        type : DataTypes.STRING,
    }
});