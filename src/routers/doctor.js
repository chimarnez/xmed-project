const express = require('express')
const router = express.Router()

const {
  getDoctors,
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

router.get('/', getDoctors)

router.get('/:id', getDoctor)

router.post('/', validator.body(createDoctorsSchema), createDoctor)

router.put('/:id', validator.body(updateDoctorsSchema), updateDoctor)

router.delete('/:id', deleteDoctor)

module.exports = router
