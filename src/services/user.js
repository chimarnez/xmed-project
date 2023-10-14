const User = require('../models/user')
const { hash } = require('./security')

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

exports.findById = function (id) {
  // SELECT * FROM users WHERE id = ?
  return User.findByPk(id)
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
