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
    }
  };
  InputStockSupply.init({
    id_input_stock: DataTypes.INTEGER,
    id_supply: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    id_unit_measure: DataTypes.INTEGER,
    unit_price: DataTypes.DECIMAL,
    total_tax: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'InputStockSupply',
  });
  return InputStockSupply;
};