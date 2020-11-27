'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SupplyBrands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SupplyBrands.belongsTo(models.Supply, {
        foreignKey : 'id_supply'
      });

      SupplyBrands.belongsTo(models.Brand, {
        foreignKey : 'id_brand'
      });
    }
  };
  SupplyBrands.init({
    id_supply: DataTypes.INTEGER,
    id_brand: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SupplyBrands',
  });
  return SupplyBrands;
};