'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AdjustInputStockSupplies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_adjust_input: {
        type: Sequelize.INTEGER,
        references: {
          model: 'AdjustInputStocks',
          key: 'id', 
          as: 'id_adjust_input'
        }
      },
      id_supply: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Supplies',
          key: 'id', 
          as: 'id_supply'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      id_unit_measure: {
        type: Sequelize.INTEGER,
        references: {
          model: 'UnitMeasures',
          key: 'id', 
          as: 'id_unit_measure'
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
    await queryInterface.dropTable('AdjustInputStockSupplies');
  }
};