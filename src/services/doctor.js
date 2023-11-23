/* eslint-disable multiline-ternary */
/* eslint-disable indent */
const { Op } = require('sequelize')
const Doctor = require('../models/doctor')
const User = require('../models/user')

exports.findAll = function () {
  const doctors = Doctor.findAll({
    include: [{ model: User, attributes: ['firstName', 'lastName', 'phone'] }]
  })
  return doctors.map((doctor) => {
    const { User, ...rest } = doctor
    return { ...User, ...rest }
  })
}

exports.findByMedicalLicense = async function (medicalLicense) {
  const doctor = await Doctor.findOne({
    where: {
      medicalLicense: medicalLicense
    },
    attributes: ['specialization', 'medicalLicense'],
    include: [
      {
        model: User,
        attributes: ['firstName', 'lastName']
      }
    ]
  })
  return doctor
    ? {
        firstName: doctor.User.firstName,
        lastName: doctor.User.lastName,
        specialization: doctor.specialization,
        medicalLicense: doctor.medicalLicense
      }
    : null
}

exports.findBySpecialization = async function (specialization) {
  const doctors = await Doctor.findAll({
    where: {
      specialization: {
        [Op.like]: `%${specialization}%`
      }
    },
    attributes: ['specialization', 'medicalLicense'],
    include: [
      {
        model: User,
        attributes: ['firstName', 'lastName']
      }
    ]
  })
  return doctors.map((doctor) => ({
    firstName: doctor.User.firstName,
    lastName: doctor.User.lastName,
    specialization: doctor.specialization,
    medicalLicense: doctor.medicalLicense
  }))
}

exports.findById = function (id) {
  return Doctor.findByPk(id)
}

exports.insert = function (data) {
  return Doctor.create(data)
}

exports.update = async function (id, data) {
  await Doctor.update(data, { where: { id } })
}

exports.deleteById = async function (id) {
  const doctor = await Doctor.findByPk(id)
  await doctor.destroy()
}
