'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OutputStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OutputStock.belongsTo(models.OutputStockSupply, {
        foreignKey: 'id_output_stock',
      });
    }
  };
  OutputStock.init({
    date_output: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'OutputStock',
  });
  return OutputStock;
};