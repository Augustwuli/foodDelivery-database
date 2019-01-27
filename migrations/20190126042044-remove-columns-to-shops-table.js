'use strict';

module.exports = {
  up:  queryInterface => Promise.all([
    queryInterface.removeColumn('orders', 'order_id'),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('orders', 'order_id',
    { 
      type: Sequelize.INTEGER,
      allowNULL: false,
    }),
  ])
};
