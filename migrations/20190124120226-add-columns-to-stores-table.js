'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('stores', 'address', { type: Sequelize.STRING}),
  ]),

  down: queryInterface => Promise.all([
    queryInterface.removeColumn('stores', 'address'),
  ]),
};