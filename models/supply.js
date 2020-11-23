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
      Supply.hasOne( models.Category, {
        foreignKey : "id_category"
      } );
    }
  };
  Supply.init({
    name: DataTypes.STRING,
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