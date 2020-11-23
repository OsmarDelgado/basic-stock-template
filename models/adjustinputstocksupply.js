'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdjustInputStockSupply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AdjustInputStockSupply.init({
    id_adjust_input: DataTypes.INTEGER,
    id_supply: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    id_unit_measure: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'AdjustInputStockSupply',
  });
  return AdjustInputStockSupply;
};