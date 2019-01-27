module.exports = (sequelize, DataTypes) => sequelize.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNULL: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    latitude:{
      type: DataTypes.STRING,
      allowNULL: false
    },
    order_phone: {
      type: DataTypes.STRING,
      allowNULL: false
    },
    statu: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      defaultValue: 0
    },
    taker_id: {
      type: DataTypes.INTEGER,
      allowNULL: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNULL: false,
      defaultValue: ''
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  },
  {
    tableName: 'orders',
  }
);