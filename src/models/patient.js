const { DataTypes } = require('sequelize')
const { sequelize } = require('./sequelize')

module.exports = sequelize.define('Patient', {
  healthInsurance: {
    field: 'health_insurance',
    type: DataTypes.STRING(100),
    // allowNull: false,
    validate: {
      len: [5, 100]
    },
    unique: true
  },
  bloodType: {
    field: 'blood_type',
    type: DataTypes.STRING(3)
    // allowNull: false
  },
  weight: {
    // in kilograms
    type: DataTypes.FLOAT,
    // allowNull: false,
    validate: {
      len: [0.1, 500]
    }
  },
  height: {
    // in meters
    type: DataTypes.FLOAT // TODO: validate if the height is minimum 0.1 and maximum 3 meters
    // allowNull: false //
  },
  allergies: {
    type: DataTypes.TEXT
    // allowNull: false
  },
  chronicDiseases: {
    field: 'chronic_diseases',
    type: DataTypes.TEXT
    // allowNull: false
  },
  currentMedication: {
    field: 'current_medication',
    type: DataTypes.TEXT
    // allowNull: false
  },
  familyHistory: {
    field: 'family_history',
    type: DataTypes.TEXT
    // allowNull: false
  }
})
