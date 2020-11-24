'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OutputStockSupply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OutputStockSupply.hasOne(models.OutputStock, {
        foreignKey: 'id_output_stock',
      });
      
      OutputStockSupply.hasMany(models.Supply, {
        foreignKey: 'id_supply',
      });

      OutputStockSupply.belongsTo(models.UnitMeasure, {
        foreignKey: 'id_unit_measure',
      });
    }
  };
  OutputStockSupply.init({
    id_output_stock: DataTypes.INTEGER,
    id_supply: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    id_unit_measure: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'OutputStockSupply',
  });
  return OutputStockSupply;
};