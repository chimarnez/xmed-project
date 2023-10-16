const { ResourceError } = require('../exceptions/resource')

exports.withDoctor = async function (req, res, next) {
  try {
    if (!req.user.Doctor) throw new ResourceError('Not authorized', 401)
    next()
  } catch (error) {
    next(error)
  }
}

exports.withoutDoctor = async function (req, res, next) {
  try {
    if (req.user.Doctor) throw new ResourceError('Doctor already exist', 407)
    next()
  } catch (error) {
    next(error)
  }
}
