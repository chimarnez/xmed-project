const { DataTypes } = require('sequelize')
const { sequelize } = require('./sequelize')

module.exports = sequelize.define('medical_records', {
  diagnosis: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  treatment: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  issuedOn: {
    field: 'issued_on',
    type: DataTypes.DATE,
    allowNull: false
  }
})
