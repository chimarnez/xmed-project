const express = require('express')
const router = express.Router()
const validator = require('../middlewares/validator')
const {
  jwtValidator,
  jwtValidatorDoctor,
  jwtValidatorPatient
} = require('../middlewares/jwt')
const {
  createRecordSchema,
  updateRecordSchema
} = require('../validations/record')
const {
  createRecord,
  // getRecordById,
  getRecordsByPatientId,
  getRecordInfoById,
  deleteRecord,
  getRecordByDoctorId,
  getRecordsFromDoctorByPatientId,
  updateRecord
} = require('../controllers/record')

router.post(
  '/',
  jwtValidatorDoctor,
  validator.body(createRecordSchema),
  createRecord
)
router.get('/patients', jwtValidatorPatient, getRecordsByPatientId)
router.get('/patients/:id', jwtValidatorPatient, getRecordInfoById)
// router.get('/patients/:id', jwtValidatorPatient, getRecordById)
router.get('/doctors', jwtValidatorDoctor, getRecordByDoctorId)
router.get(
  '/doctors/patient/:id',
  jwtValidatorDoctor,
  getRecordsFromDoctorByPatientId
)
router.get('/doctors/:id', jwtValidatorDoctor, getRecordInfoById)
router.patch(
  '/:id',
  jwtValidatorDoctor,
  validator.body(updateRecordSchema),
  updateRecord
) // UNSAFE route
router.delete('/:id', jwtValidator, deleteRecord)

module.exports = router
