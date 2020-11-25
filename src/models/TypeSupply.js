import Sequelize from 'sequelize';
import { sequelize } from '../db/db';
import Supply from './Supply';

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

// Type Supply Foreign Key
TypeSupply.hasOne( Supply, { foreignKey : 'id_type_supply', sourceKey : 'id' } );
Supply.belongsTo( TypeSupply, { foreignKey : 'id_type_supply', sourceKey : 'id' } );

export default TypeSupply;