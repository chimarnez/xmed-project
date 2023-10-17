const Record = require('../models/record')

exports.save = async function (data) {
  return Record.create(data)
}

// returns all records for a patient
exports.findByPatientId = async function (PatientId) {
  return Record.findAll({
    where: {
      PatientId
    }
  })
}

// returns all records for a doctor
exports.findByDoctorId = async function (DoctorId) {
  return Record.findAll({
    where: {
      DoctorId
    }
  })
}

// returns a single record by id
exports.findById = async function (id) {
  return Record.findOne({
    where: {
      id
    }
  })
}

exports.updateById = async function (id, data) {
  await Record.update(data, {
    where: {
      id
    }
  })
}

exports.deleteById = async function (id) {
  const record = await Record.findByPk(id)
  await record.destroy()
}
