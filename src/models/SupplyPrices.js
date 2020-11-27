import Sequelize from 'sequelize';
import { sequelize } from '../db/db';

const SupplyPrices = sequelize.define( 'SupplyPrices', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    id_supply : {
        type : Sequelize.INTEGER,
        allowNull: false,
    },
    id_price : {
        type : Sequelize.INTEGER,
        allowNull: false,
    },
    active : {
        type : Sequelize.BOOLEAN,
        defaultValue : true
    }
}, {
    timestamps : true,
    tableName: "SupplyPrices"
} );

export default SupplyPrices;