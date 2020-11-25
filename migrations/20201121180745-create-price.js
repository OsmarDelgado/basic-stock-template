'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_provider: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
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
    await queryInterface.dropTable('Prices');
  }
};