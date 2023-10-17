const express = require('express')
const router = express.Router()
const validator = require('../middlewares/validator')
const { jwtValidator, jwtValidatorDoctor } = require('../middlewares/jwt')
const {
  createRecordSchema,
  updateRecordSchema
} = require('../validations/record')
const {
  createRecord,
  getRecord,
  updateRecord,
  deleteRecord
} = require('../controllers/record')

router.post('/', jwtValidatorDoctor, validator.body(createRecordSchema), createRecord)

router.get('/:id', jwtValidator, getRecord)

router.put(
  '/:id',
  jwtValidator,
  validator.body(updateRecordSchema),
  updateRecord
)

router.delete('/:id', jwtValidator, deleteRecord)

module.exports = router
