'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UnitMeasure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UnitMeasure.hasOne(models.Supply, {
        foreignKey: 'id_unit_measure',
      });

      UnitMeasure.hasOne(models.InputStockSupply, {
        foreignKey: 'id_unit_measure',
      });
    }
  };
  UnitMeasure.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UnitMeasure',
  });
  return UnitMeasure;
};