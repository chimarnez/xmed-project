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
const { jwtValidator } = require('../middlewares/jwt')
const {
  createDoctorsSchema,
  updateDoctorsSchema
} = require('../validations/doctor')

router.get('/', jwtValidator, getDoctors)

router.get('/:id', jwtValidator, getDoctor)

router.post(
  '/',
  jwtValidator,
  validator.body(createDoctorsSchema),
  createDoctor
)

router.put(
  '/:id',
  jwtValidator,
  validator.body(updateDoctorsSchema),
  updateDoctor
)

router.delete('/:id', jwtValidator, deleteDoctor)

module.exports = router
