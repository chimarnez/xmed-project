const { findByEmail } = require('./user')
const { compare, sign } = require('./security')
const AuthException = require('../exceptions/auth')

exports.authenticate = async (credentials) => {
  const { email, password } = credentials

  const user = await findByEmail(email)

  if (!user) {
    throw new AuthException('Invalid credentials')
  }

  const isSame = await compare(password, user.password)

  if (!isSame) {
    throw new AuthException('Invalid credentials')
  }

  return sign({ id: user.id })
}
