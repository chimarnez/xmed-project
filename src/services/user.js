const User = require('../models/user')
const Patient = require('../models/patient')
const Doctor = require('../models/doctor')
const { hash } = require('./security')
const { Op } = require('sequelize');

exports.insert = async function (data) {
  data.password = await hash(data.password)
  const user = await User.create(data)
  delete user.dataValues.password
  return user
}

exports.findByEmail = function (email) {
  // SELECT * FROM users WHERE email = ?
  return User.findOne({
    where: {
      email
    }
  })
}

exports.findByEmailLike = function (email) {
  console.log(email)
  console.log(`${email}`)
  // SELECT * FROM users WHERE email LIKE ?
  return User.findOne({
    where: {
      email: {
        // [Op.like]: `%${email}%`
        [Op.like]: email
      }
    }
  })
}

exports.findById = function (id) {
  // SELECT * FROM users WHERE id = ?
  return User.findByPk(id)
}

exports.findByIdWithPatient = function (id) {
  return User.findByPk(id, {
    include: {
      model: Patient,
      attributes: ['id']
    }
  })
}
exports.findByIdWithDoctor = function (id) {
  return User.findByPk(id, {
    include: {
      model: Doctor,
      attributes: ['id']
    }
  })
}

exports.findAll = function () {
  return User.findAll()
}

exports.update = async function (id, data) {
  await User.update(data, { where: { id } })
}

exports.deleteById = async function (id) {
  const patient = await User.findByPk(id)
  await patient.destroy()
}
