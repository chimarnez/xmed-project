const brcypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.hash = async (text) => {
  const salt = await brcypt.genSalt(10)
  return brcypt.hash(text, salt)
}

exports.compare = async (text, hashedText) => {
  return brcypt.compare(text, hashedText)
}

exports.sign = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' })
}
