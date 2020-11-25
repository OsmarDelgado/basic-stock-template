'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_supply: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Supplies',
          key: 'id', 
          as: 'id_supply'
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
      last_cost: {
        type: Sequelize.DECIMAL
      },
      average_cost: {
        type: Sequelize.DECIMAL
      },
      last_price: {
        type: Sequelize.DECIMAL
      },
      average_price: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('Stocks');
  }
};