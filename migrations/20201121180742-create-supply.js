'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Supplies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      id_unit_measure: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'UnitMeasures',
          key: 'id', 
          as: 'id_unit_measure'
        }
      },
      id_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id', 
          as: 'id_category'
        }
      },
      id_brand: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Brands',
          key: 'id', 
          as: 'id_brand'
        }
      },
      id_type_supply: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TypeSupplies',
          key: 'id', 
          as: 'id_type_supply'
        }
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Supplies');
  }
};