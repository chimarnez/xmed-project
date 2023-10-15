const { RessourceError } = require('../exceptions/ressource')

exports.withPatient = async function (req, res, next) {
  try {
    if (!req.user.Patient) throw new RessourceError('Ressource not available')
    next()
  } catch (error) {
    next(error)
  }
}

exports.withoutPatient = async function (req, res, next) {
  try {
    if (req.user.Patient) throw new RessourceError('Patient already exist', 407)
    next()
  } catch (error) {
    next(error)
  }
}
