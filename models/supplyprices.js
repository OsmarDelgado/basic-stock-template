'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SupplyPrices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SupplyPrices.belongsTo(models.Supply, {
        foreignKey : 'id_supply'
      });
    }
  };
  SupplyPrices.init({
    id_supply: DataTypes.INTEGER,
    id_provider: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SupplyPrices',
  });
  return SupplyPrices;
};