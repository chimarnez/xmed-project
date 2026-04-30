const { NotFoundError, ConflictError } = require('../exceptions')

exports.withPatient = async function (req, res, next) {
  if (!req.user.Patient) throw new NotFoundError('Resource not available')
  next()
}

exports.withoutPatient = async function (req, res, next) {
  if (req.user.Patient) throw new ConflictError('Patient already exists')
  next()
}
