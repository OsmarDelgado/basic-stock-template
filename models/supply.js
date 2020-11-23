'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Supply.belongsTo(models.UnitMeasure, {
        foreignKey: 'id_unit_measure',
      });

      Supply.belongsTo(models.Category, {
        foreignKey: 'id_category',
      });

      Supply.belongsTo(models.Brand, {
        foreignKey: 'id_brand',
      });

      Supply.belongsTo(models.TypeSupply, {
        foreignKey: 'id_type_supply',
      });

      Supply.hasMany(models.Price, {
        foreignKey: 'id_supply',
      });

      Supply.belongsTo(models.InputStockSupply, {
        foreignKey: 'id_input_stock',
      });
    }
  };
  Supply.init({
    name: DataTypes.STRING,
    id_unit_measure: DataTypes.INTEGER,
    id_category: DataTypes.INTEGER,
    id_brand: DataTypes.INTEGER,
    id_type_supply: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Supply',
  });
  return Supply;
};