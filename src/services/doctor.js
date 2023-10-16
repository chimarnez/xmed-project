const Doctor = require('../models/doctor')

exports.findAll = function () {
  return Doctor.findAll()
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
