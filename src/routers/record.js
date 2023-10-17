const express = require('express')
const router = express.Router()
const validator = require('../middlewares/validator')
const { jwtValidator, jwtValidatorDoctor, jwtValidatorPatient } = require('../middlewares/jwt')
const {
  createRecordSchema
} = require('../validations/record')
const {
  createRecord,
  getRecordById,
  getRecordsByPatientId,
  deleteRecord,
  getRecordByDoctorId,
  getRecordsFromDoctorByPatientId
} = require('../controllers/record')

router.post('/', jwtValidatorDoctor, validator.body(createRecordSchema), createRecord)

router.get('/patients', jwtValidatorPatient, getRecordsByPatientId)

router.get('/patients/:id', jwtValidatorPatient, getRecordById)

router.get('/doctors', jwtValidatorDoctor, getRecordByDoctorId)

router.get('/doctors/patient/:id', jwtValidatorDoctor, getRecordsFromDoctorByPatientId)

router.get('/doctors/:id', jwtValidatorDoctor, getRecordById)

/* router.put(
  '/doctors/:id',
  jwtValidatorDoctor,
  validator.body(updateRecordSchema),
  updateRecord
) */

router.delete('/:id', jwtValidator, deleteRecord)

module.exports = router
