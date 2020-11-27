import Sequelize from 'sequelize';
import { sequelize } from '../db/db';
import SupplyBrands from './SupplyBrands';
import SupplyPrices from './SupplyPrices';

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

// SupplyBrands Foreign Key
Supply.hasMany( SupplyBrands, { foreignKey : 'id_supply', sourceKey : 'id' } );
SupplyBrands.belongsTo( Supply, { foreignKey : 'id_supply', sourceKey : 'id' } );

// SupplyPrices Foreign Key
Supply.hasMany( SupplyPrices, { foreignKey : 'id_supply', sourceKey : 'id' } );
SupplyPrices.belongsTo( Supply, { foreignKey : 'id_supply', sourceKey : 'id' } );

export default Supply;