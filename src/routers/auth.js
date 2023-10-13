const express = require('express')
const router = express.Router()
const joiValidator = require('../middlewares/joiValidator')
const { loginSchema } = require('../validations/auth')
const { login } = require('../controllers/auth')

router.post('/', joiValidator.body(loginSchema), login)

module.exports = router
