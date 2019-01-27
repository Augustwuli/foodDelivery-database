module.exports = (sequelize, DataTypes) => sequelize.define(
  'stores',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    store_name: {
      type: DataTypes.STRING,
      allowNULL: false,
      defaultValue: ''
    },
    address: {
      type: DataTypes.STRING,
      allowNULL: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNULL: false,
      defaultValue: ''
    },
    latitude:{
      type: DataTypes.STRING,
      allowNULL: false,
      defaultValue: ''
    },
    phone: {
      type: DataTypes.STRING,
      allowNULL: false,
      defaultValue: ''
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    tableName: 'stores',
  },
);