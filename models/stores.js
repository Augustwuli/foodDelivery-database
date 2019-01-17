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
    password: {
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
    phone: {
      type: DataTypes.STRING,
      allowNULL: false
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    tableName: 'stores',
  },
);