const { DataTypes } = require('sequelize')
const { sequelize } = require('./sequelize')

module.exports = sequelize.define('Patient', {
  healthInsurance: {
    field: 'health_insurance',
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      len: [5, 100]
    },
    unique: true
  },
  bloodType: {
    field: 'blood_type',
    type: DataTypes.STRING(3),
    allowNull: false,
    validate: {
      isIn: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    }
  },
  weight: { // in kilograms
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      len: [0.1, 500]
    }
  },
  height: { // in meters
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      len: [0.1, 3]
    }
  },
  allergies: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  chronicDiseases: {
    field: 'chronic_diseases',
    type: DataTypes.TEXT,
    allowNull: false
  },
  currentMedication: {
    field: 'current_medication',
    type: DataTypes.TEXT,
    allowNull: false
  },
  familyHistory: {
    field: 'family_history',
    type: DataTypes.TEXT,
    allowNull: false
  }
})
