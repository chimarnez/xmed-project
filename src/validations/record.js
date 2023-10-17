const Joi = require('joi')
const { optional } = require('./validation')

const schema = Joi.object({
  symptoms: Joi.string().alter(optional),

  diagnosis: Joi.string().alter(optional),

  treatment: Joi.string().alter(optional),

  issuedOn: Joi.date().alter(optional),

  PatientId: Joi.number().alter(optional)
})

exports.createRecordSchema = schema.tailor('post')
exports.updateRecordSchema = schema.tailor('put')
