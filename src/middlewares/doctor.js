const { UnauthorizedError, ConflictError } = require('../exceptions')

exports.withDoctor = async function (req, res, next) {
  if (!req.user.Doctor) throw new UnauthorizedError('Not authorized')
  next()
}

exports.withoutDoctor = async function (req, res, next) {
  if (req.user.Doctor) throw new ConflictError('Doctor already exists')
  next()
}
