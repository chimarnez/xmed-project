const { ConflictError } = require('../exceptions')
const { findByEmailLike } = require('../services/user')

exports.withUser = async function (req, res, next) {
  const user = await findByEmailLike(req.body.email)
  if (user) {
    throw new ConflictError('User already exists')
  }
  next()
}