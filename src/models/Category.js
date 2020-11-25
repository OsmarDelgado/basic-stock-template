import Sequelize from 'sequelize';
import { sequelize } from '../db/db';
import Supply from './Supply';

const Category = sequelize.define( 'categories', {
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
    tableName: "Categories"
} );

// Category Foreign Key
Category.hasMany( Supply, { foreignKey : 'id_category', sourceKey : 'id' } );
Supply.belongsTo( Category, { foreignKey : 'id_category', sourceKey : 'id' } );

export default Category;