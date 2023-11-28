const { DataTypes } = require('sequelize')
const { sequelize } = require('./sequelize')

module.exports = sequelize.define('User', {
  firstName: {
    field: 'first_name',
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      len: [3, 50]
    }
  },
  lastName: {
    field: 'last_name',
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      len: [3, 50]
    }
  },
  birthDate: {
    field: 'birth_date',
    type: DataTypes.DATE,
    allowNull: false
  },
  gender: {
    type: DataTypes.CHAR(1),
    allowNull: false,
    validate: {
      isIn: [['M', 'F', 'O']] // M - men, F - female, O - other
    }
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false,
    validate: {
      len: [7, 15]
    }
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  profilePicture: {
    field: 'profile_picture',
    type: DataTypes.STRING(100),
    allowNull: true
  }
})
