import Sequelize from 'sequelize';
import { sequelize } from '../db/db';

const Category = sequelize.define( 'categories', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    name : {
        type : Sequelize.STRING
    },
    active : {
        type : Sequelize.BOOLEAN,
        defaultValue : true
    }
}, {
    timestamps : true,
    tableName: "Categories"
} );

export default Category;