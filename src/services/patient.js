const Patient = require('../models/patient')

exports.insert = function (data) {
  return Patient.create(data)
}

exports.findPatientById = function (id) {
  // SELECT * FROM patients WHERE id = ?
  return Patient.findByPk(id)
}

exports.findPatientByUserId = function (userId) {
  // SELECT * FROM patients WHERE userId = ?
  return Patient.findOne({
    where: {
      userId
    }
  })
}
