'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'takers',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNULL: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNULL: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNULL: false
      },
      num: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        defaultValue: 3
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    }
  ),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('takers')
};
