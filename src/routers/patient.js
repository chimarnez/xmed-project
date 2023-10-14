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
const { patientSchema } = require('../validations/patient')

router.get('/', getPatients)

router.get('/:id', getPatient)

router.post('/', validator.body(patientSchema), createPatient)

router.put('/:id', validator.body(patientSchema), updatePatient)

router.delete('/:id', deletePatient)

module.exports = router
