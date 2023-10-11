const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("patients", {
  firstName: {
    field: "first_name",
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  lastName: {
    field: "last_name",
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  birthDate: {
    field: "birth_date",
    type: DataTypes.DATE,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(60),
    unique: true,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});
