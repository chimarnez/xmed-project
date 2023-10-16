const { RessourceError } = require('../exceptions/ressource')

exports.withDoctor = async function (req, res, next) {
  try {
    if (!req.user.Doctor) throw new RessourceError('Not authorized', 401)
    next()
  } catch (error) {
    next(error)
  }
}

exports.withoutDoctor = async function (req, res, next) {
  try {
    if (req.user.Doctor) throw new RessourceError('Doctor already exist', 407)
    next()
  } catch (error) {
    next(error)
  }
}
