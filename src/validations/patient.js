const Joi = require('joi')

exports.patientSchema = Joi.object({
  UserId: Joi.alternatives([Joi.number(), Joi.string()]).required(),
  healthInsurance: Joi.string().min(5).max(100).allow(null),
  bloodType: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .allow(null),
  weight: Joi.number().min(0.1).max(500).allow(null),
  height: Joi.number().allow(null),
  allergies: Joi.string().allow(null),
  chronicDiseases: Joi.string().allow(null),
  currentMedication: Joi.string().allow(null),
  familyHistory: Joi.string().allow(null)
})

// exports.createPatientSchema = Joi.object({
//   healthInsurance: Joi.string()
//     .min(5)
//     .max(100)
//     .required(),

//   bloodType: Joi.string()
//     .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
//     .required(),

//   weight: Joi.number()
//     .min(0.1)
//     .max(500)
//     .required(),

//   height: Joi.number()
//     .required(),

//   allergies: Joi.string()
//     .required(),

//   chronicDiseases: Joi.string()
//     .required(),

//   currentMedication: Joi.string()
//     .required(),

//   familyHistory: Joi.string()
//     .required()
// })
