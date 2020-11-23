'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InputStockSupply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InputStockSupply.belongsTo(models.InputStock, {
        foreignKey: 'id_input_stock',
      });
      
      InputStockSupply.hasMany(models.Supply, {
        foreignKey: 'id_supply',
      });

      InputStockSupply.belongsTo(models.UnitMeasure, {
        foreignKey: 'id_unit_measure',
      });

      InputStockSupply.belongsTo(models.Tax, {
        foreignKey: 'id_tax',
      });
    }
  };
  InputStockSupply.init({
    id_input_stock: DataTypes.INTEGER,
    id_supply: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    id_unit_measure: DataTypes.INTEGER,
    unit_price: DataTypes.DECIMAL,
    id_tax: DataTypes.INTEGER,
    total_tax: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'InputStockSupply',
  });
  return InputStockSupply;
};