'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('orders', 'name',
    { 
      type: Sequelize.STRING,
      allowNULL: false,
      defaultValue: ''
    }),
  ]),

  down: queryInterface => Promise.all([
    queryInterface.removeColumn('orders', 'name'),
  ]),
};