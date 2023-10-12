const Joi = require('joi')

exports.createRecordSchema = Joi.object({
  symptoms: Joi.string()
    .required(),

  diagnosis: Joi.string()
    .required(),

  treatment: Joi.string()
    .required(),

  issuedOn: Joi.date()
    .required()
})
