const { findByEmail } = require('./user')
const { compare, sign } = require('./security')
const { UnauthorizedError } = require('../exceptions')

exports.authenticate = async (credentials) => {
  const { email, password } = credentials

  const user = await findByEmail(email)

  if (!user) {
    throw new UnauthorizedError('Invalid credentials')
  }

  const isSame = await compare(password, user.password)

  if (!isSame) {
    throw new UnauthorizedError('Invalid credentials')
  }

  return sign({ id: user.id })
}
