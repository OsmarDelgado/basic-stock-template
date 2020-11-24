'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Stock.belongsTo(models.Supply, {
        foreignKey: 'id_supply',
      });

      Stock.belongsTo(models.UnitMeasure, {
        foreignKey: 'id_unit_measure',
      });
    }
  };
  Stock.init({
    id_supply: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    id_unit_measure: DataTypes.INTEGER,
    last_cost: DataTypes.DECIMAL,
    average_cost: DataTypes.DECIMAL,
    last_price: DataTypes.DECIMAL,
    average_price: DataTypes.DECIMAL,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};