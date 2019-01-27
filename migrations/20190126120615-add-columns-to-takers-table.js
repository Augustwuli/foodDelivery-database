'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('takers', 'taker_name',
    { 
      type: Sequelize.STRING,
      allowNULL: false,
      defaultValue: ''
    }),
  ]),

  down: queryInterface => Promise.all([
    queryInterface.removeColumn('takers', 'taker_name'),
  ]),
};