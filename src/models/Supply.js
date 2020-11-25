import Sequelize from 'sequelize';
import { sequelize } from '../db/db';

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

export default Supply;