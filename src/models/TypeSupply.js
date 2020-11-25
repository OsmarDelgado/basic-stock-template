import Sequelize from 'sequelize';
import { sequelize } from '../db/db';

const TypeSupply = sequelize.define( 'typesupplies', {
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
    tableName: "TypeSupplies"
} );

export default TypeSupply;