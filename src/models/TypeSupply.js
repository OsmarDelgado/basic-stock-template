import Sequelize from 'sequelize';
import { sequelize } from '../db/db';

const TypeSupply = sequelize.define( 'typesupplies', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    name : {
        type : Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    active : {
        type : Sequelize.BOOLEAN,
        defaultValue : true
    }
}, {
    timestamps : true,
    tableName: "TypeSupplies"
} );

export default TypeSupply;