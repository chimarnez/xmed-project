const { DataTypes } = require('sequelize')
const { sequelize } = require('./sequelize')

module.exports = sequelize.define('Doctor', {
  specialization: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      len: [5, 100]
    }
  },
  medicalLicense: {
    field: 'medical_license',
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      len: [5, 100]
    },
    unique: true
  }
})
