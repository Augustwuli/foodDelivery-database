'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'orders',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNULL: false,
      },
      store_id: {
        type: Sequelize.INTEGER,
        allowNULL: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNULL: false,
      },
      longitude: {
        type: Sequelize.STRING,
        allowNULL: false,
      },
      latitude:{
        type: Sequelize.STRING,
        allowNULL: false
      },
      order_phone: {
        type: Sequelize.STRING,
        allowNULL: false
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('orders')
};