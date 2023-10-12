const Joi = require('joi')

exports.createPatientSchema = Joi.object({
  healthInsurance: Joi.string()
    .min(5)
    .max(100)
    .required(),

  bloodType: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required(),

  weight: Joi.number()
    .min(0.1)
    .max(500)
    .required(),

  height: Joi.number()
    .min(0.1)
    .max(3)
    .required(),

  allergies: Joi.string()
    .required(),

  chronicDiseases: Joi.string()
    .required(),

  currentMedication: Joi.string()
    .required(),

  familyHistory: Joi.string()
    .required()
})
