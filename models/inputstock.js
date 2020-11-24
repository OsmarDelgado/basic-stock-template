'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InputStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InputStock.belongsTo(models.InputStockSupply, {
        foreignKey: 'id_input_stock',
      });
    }
  };
  InputStock.init({
    date_input: DataTypes.DATE,
    id_provider: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL,
    total_tax: DataTypes.DECIMAL,
    total: DataTypes.DECIMAL,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'InputStock',
  });
  return InputStock;
};