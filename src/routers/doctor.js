const express = require('express')
const router = express.Router()

const {
  getDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  getDoctors,
  getDoctorInfo
} = require('../controllers/doctor')
const validator = require('../middlewares/validator')
const {
  createDoctorsSchema,
  updateDoctorsSchema
} = require('../validations/doctor')
const { withDoctor, withoutDoctor } = require('../middlewares/doctor')

router.get('/search', withoutDoctor, getDoctors)

router.get('/', withDoctor, getDoctor)
router.post(
  '/',
  withoutDoctor,
  validator.body(createDoctorsSchema),
  createDoctor
)
router.patch('/', withDoctor, validator.body(updateDoctorsSchema), updateDoctor)
router.delete('/', withDoctor, deleteDoctor)
// info routes
router.get('/:id', getDoctorInfo)

module.exports = router
