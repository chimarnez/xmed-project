const User = require('../models/user')

exports.insert = function (data) {
  return User.create(data)
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
