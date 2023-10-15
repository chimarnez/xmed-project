const express = require('express')

const router = express.Router()

const {
  // getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient
} = require('../controllers/patient')

const validator = require('../middlewares/validator')
const { patientSchema } = require('../validations/patient')
const { withPatient, withoutPatient } = require('../middlewares/patient')

// router.get('/', jwtValidator, withPatient, getPatients)

router.get('/', withPatient, getPatient)

router.post('/', withoutPatient, validator.body(patientSchema), createPatient)

router.put('/', withPatient, validator.body(patientSchema), updatePatient)

router.delete('/', withPatient, deletePatient)

module.exports = router
