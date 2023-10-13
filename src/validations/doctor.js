const Joi = require('joi')

exports.createDoctorSchema = Joi.object({
  specialization: Joi.string()
    .min(5)
    .max(100)
    .required(),

  medicalLicense: Joi.string()
    .alphanum()
    .min(5)
    .max(100)
    .required()
})
