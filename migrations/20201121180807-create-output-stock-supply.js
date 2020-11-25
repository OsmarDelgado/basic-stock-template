'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OutputStockSupplies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_output_stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'OutputStocks',
          key: 'id', 
          as: 'id_output_stock'
        }
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
    await queryInterface.dropTable('OutputStockSupplies');
  }
};