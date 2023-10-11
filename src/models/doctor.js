const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("doctors", {
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
  specialization: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  medicalLicense: {
    field: "medical_license",
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});
