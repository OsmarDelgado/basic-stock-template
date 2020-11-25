import Sequelize from 'sequelize';
import { sequelize } from '../db/db';

const UnitMeasure = sequelize.define( 'unitmeasures', {
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
    tableName: "UnitMeasures"
} );

export default UnitMeasure;