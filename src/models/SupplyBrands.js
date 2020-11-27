import Sequelize from 'sequelize';
import { sequelize } from '../db/db';

const SupplyBrands = sequelize.define( 'SupplyBrands', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    id_supply : {
        type : Sequelize.INTEGER,
        allowNull: false,
    },
    id_brand : {
        type : Sequelize.INTEGER,
        allowNull: false,
    },
    active : {
        type : Sequelize.BOOLEAN,
        defaultValue : true
    }
}, {
    timestamps : true,
    tableName: "SupplyBrands"
} );

export default SupplyBrands;