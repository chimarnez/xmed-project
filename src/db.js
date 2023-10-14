const { connect, sync } = require('./models/sequelize')
const User = require('./models/user')
const Doctor = require('./models/doctor')
const Patient = require('./models/patient')
const Record = require('./models/record')

// Relationships

// A user can be a doctor
User.hasOne(Doctor)
Doctor.belongsTo(User, {
  onDelete: 'CASCADE',
  foreignKey: {
    allowNull: false,
    unique: true
  }
})

// An user by default is a patient, this is why allowNull is false
User.hasOne(Patient)

Patient.belongsTo(User, {
  onDelete: 'CASCADE',
  foreignKey: {
    allowNull: false,
    unique: true
  }
})

// A doctor can have many patients
Doctor.hasMany(Record)
Record.belongsTo(Doctor)

// A patient can have many records
Patient.hasMany(Record)
Record.belongsTo(Patient)

exports.initDatabase = async function () {
  await connect()
  await sync()
}
