import Sequelize from 'sequelize';
import { sequelize } from '../db/db';

const Brand = sequelize.define( 'brands', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    name : {
        type : Sequelize.STRING,
    },
    active : {
        type : Sequelize.BOOLEAN,
        defaultValue : true
    }
}, {
    timestamps : true,
    tableName: "Brands"
} );

export default Brand;