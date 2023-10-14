const { authenticate } = require('../services/auth')
const AuthException = require('../exceptions/auth')

exports.login = async (req, res) => {
  const { email, password } = req.body

  try {
    const token = await authenticate({ email, password })
    res.status(200).json({ token })
  } catch (e) {
    if (e instanceof AuthException) {
      return res.status(400).json({
        code: 'ERR_AUTH',
        message: 'Email o credenciales incorrectos'
      })
    }
    throw e
  }
}
