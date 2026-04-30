const { authenticate } = require('../services/auth')

exports.login = async (req, res) => {
  const { email, password } = req.body
  const token = await authenticate({ email, password })
  res.status(200).json({ token })
}
