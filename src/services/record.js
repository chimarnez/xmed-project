const Record = require('../models/record')
const User = require('../models/user')
const Patient = require('../models/patient')
const Doctor = require('../models/doctor')

exports.save = async function (data) {
  return Record.create(data)
}

exports.findByPatientId = async function (PatientId) {
  return Record.findAll({
    where: {
      PatientId
    }
  })
}

exports.findInfoById = async function (id) {
  const record = await Record.findByPk(id, {
    include: [
      {
        model: Doctor,
        include: [
          {
            model: User,
            attributes: ['firstName', 'lastName']
          }
        ]
      },
      {
        model: Patient,
        attributes: ['id'],
        include: [
          {
            model: User,
            attributes: ['firstName', 'lastName']
          }
        ]
      }
    ]
  })

  if (record) {
    return {
      PatientId: record.Patient.id,
      patientFirstName: record.Patient.User.firstName,
      patientLastName: record.Patient.User.lastName,
      diagnosis: record.diagnosis,
      symptoms: record.symptoms,
      treatment: record.treatment,
      issuedOn: record.issuedOn,
      doctorFirstName: record.Doctor.User.firstName,
      doctorLastName: record.Doctor.User.lastName
    }
  }

  return null
}

exports.findByDoctorId = async function (DoctorId) {
  return Record.findAll({
    where: {
      DoctorId
    }
  })
}

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
