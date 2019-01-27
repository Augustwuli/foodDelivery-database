module.exports = (sequelize, DataTypes) => sequelize.define(
  'takers',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    taker_name: {
      type: DataTypes.STRING,
      allowNULL: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNULL: false
    },
    num: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      defaultValue: 3
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    tableName: 'takers',
  },
);