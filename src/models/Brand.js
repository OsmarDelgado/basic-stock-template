import Sequelize from 'sequelize';
import { sequelize } from '../db/db';
import Supply from './Supply';

const Brand = sequelize.define( 'brands', {
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
    tableName: "Brands"
} );

// Brand Foreign Key
Brand.hasMany( Supply, { foreignKey : 'id_brand', sourceKey : 'id' } );
Supply.belongsTo( Brand, { foreignKey : 'id_brand', sourceKey : 'id' } );

export default Brand;