const express = require('express')
const router = express.Router()

const {
  getDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor
} = require('../controllers/doctor')
const validator = require('../middlewares/validator')
const {
  createDoctorsSchema,
  updateDoctorsSchema
} = require('../validations/doctor')
const { withDoctor, withoutDoctor } = require('../middlewares/doctor')

router.get('/', withDoctor, getDoctor)
router.post(
  '/',
  withoutDoctor,
  validator.body(createDoctorsSchema),
  createDoctor
)
router.patch('/', withDoctor, validator.body(updateDoctorsSchema), updateDoctor)
router.delete('/', withDoctor, deleteDoctor)

module.exports = router
