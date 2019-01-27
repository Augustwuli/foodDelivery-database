'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('orders', 'statu',
    { 
      type: Sequelize.INTEGER,
      allowNULL: false,
      defaultValue: 0
    }),
    queryInterface.addColumn('orders', 'taker_id',
    { 
      type: Sequelize.INTEGER,
      allowNULL: false,
    }),
  ]),

  down: queryInterface => Promise.all([
    queryInterface.removeColumn('orders', 'statu'),
    queryInterface.removeColumn('orders', 'taker_id'),
  ]),
};