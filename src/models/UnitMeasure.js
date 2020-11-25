import Sequelize from 'sequelize';
import { sequelize } from '../db/db';
import Supply from './Supply';

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

// Unit Measure Foreign Key
UnitMeasure.hasOne( Supply, { foreignKey : 'id_unit_measure', sourceKey : 'id' } );
Supply.belongsTo( UnitMeasure, { foreignKey : 'id_unit_measure', sourceKey : 'id' } );

export default UnitMeasure;