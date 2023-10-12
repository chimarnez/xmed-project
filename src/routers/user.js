const express = require('express')
const router = express.Router()
const { createUser } = require('../controllers/user')
const { createUserAndPatientSchema } = require('../validations/user')
const validator = require('../middlewares/validator')

router.post('/users', validator.body(createUserAndPatientSchema), createUser)

module.exports = router
