'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('stores', 'store_name', { type: Sequelize.STRING}),
  ]),

  down: queryInterface => Promise.all([
    queryInterface.removeColumn('stores', 'store_name'),
  ]),
};