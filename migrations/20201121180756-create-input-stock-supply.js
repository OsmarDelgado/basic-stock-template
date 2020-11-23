'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('InputStockSupplies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_input_stock: {
        type: Sequelize.INTEGER,
        references: {
          model: 'InputStocks',
          key: 'id', 
          as: 'id_input_stock'
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
      unit_price: {
        type: Sequelize.DECIMAL
      },
      id_tax: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Taxes',
          key: 'id', 
          as: 'id_tax'
        }
      },
      total_tax: {
        type: Sequelize.DECIMAL
      },
      total: {
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
    await queryInterface.dropTable('InputStockSupplies');
  }
};