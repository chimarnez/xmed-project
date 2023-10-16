const { ResourceError } = require('../exceptions/resource')

exports.withPatient = async function (req, res, next) {
  try {
    if (!req.user.Patient) throw new ResourceError('Resource not available')
    next()
  } catch (error) {
    next(error)
  }
}

exports.withoutPatient = async function (req, res, next) {
  try {
    if (req.user.Patient) throw new ResourceError('Patient already exist', 407)
    next()
  } catch (error) {
    next(error)
  }
}
