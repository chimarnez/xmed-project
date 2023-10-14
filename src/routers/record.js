const express = require('express')
const router = express.router()
const validator = require('../middlewares/validator')
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

router.post('/', validator.body(createRecordSchema), createRecord)

router.get('/:id', getRecord)

router.put('/:id', validator.body(updateRecordSchema), updateRecord)

router.delete('/:id', deleteRecord)

module.exports = router
