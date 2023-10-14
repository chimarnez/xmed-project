const express = require('express')

const router = express.Router()

const {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient
} = require('../controllers/patient')

const validator = require('../middlewares/validator')
const jwtValidator = require('../middlewares/jwt')
const { patientSchema } = require('../validations/patient')

router.get('/', jwtValidator, getPatients)

router.get('/:id', jwtValidator, getPatient)

router.post('/', jwtValidator, validator.body(patientSchema), createPatient)

router.put('/:id', jwtValidator, validator.body(patientSchema), updatePatient)

router.delete('/:id', jwtValidator, deletePatient)

module.exports = router
