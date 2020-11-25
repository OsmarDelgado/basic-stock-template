import Sequelize from 'sequelize';
import { sequelize } from '../db/db';
import UnitMeasure from './UnitMeasure';
import Category from './Category';
import Brand from './Brand';
import TypeSupply from './TypeSupply';

const Supply = sequelize.define( 'supplies', {
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
    id_unit_measure : {
        type : Sequelize.INTEGER,
        allowNull: false,
    },
    id_category : {
        type : Sequelize.INTEGER,
        allowNull: false,
    },
    id_brand : {
        type : Sequelize.INTEGER,
        allowNull: false,
    },
    id_type_supply : {
        type : Sequelize.INTEGER,
        allowNull: false,
    },
    active : {
        type : Sequelize.BOOLEAN,
        defaultValue : true
    }
}, {
    timestamps : true,
    tableName: "Supplies"
} );

// Unit Measure Foreign Key
UnitMeasure.hasMany( Supply, { foreignKey : 'id_unit_measure', sourceKey : 'id' } );
Supply.belongsTo( UnitMeasure, { foreignKey : 'id_unit_measure', sourceKey : 'id' } );

// Category Foreign Key
Category.hasMany( Supply, { foreignKey : 'id_category', sourceKey : 'id' } );
Supply.belongsTo( Category, { foreignKey : 'id_category', sourceKey : 'id' } );

// Brand Foreign Key
Brand.hasMany( Supply, { foreignKey : 'id_brand', sourceKey : 'id' } );
Supply.belongsTo( Brand, { foreignKey : 'id_brand', sourceKey : 'id' } );

// Type Supply Foreign Key
TypeSupply.hasMany( Supply, { foreignKey : 'id_type_supply', sourceKey : 'id' } );
Supply.belongsTo( TypeSupply, { foreignKey : 'id_type_supply', sourceKey : 'id' } );

export default Supply;