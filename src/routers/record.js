const express = require('express')
const router = express.router()
const validator = require('../middlewares/validator')
const {
  createRecordSchema,
} = require('../validations/record')
const {
  createRecord,
  getRecord,
  updateRecord,
  deleteRecord
} = require('../controllers/record')

router.post('/records', validator.body(createRecordSchema), createRecord)

router.get('/records/:id', getRecord)

router.put('/records/:id', validator.body(createRecordSchema),updateRecord)

router.delete('/records/:id', deleteRecord)

module.exports = router