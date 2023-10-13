const Joi = require('joi')
const { createPatientSchema } = require('./patient')

const createUserSchema = Joi.object({
  firstName: Joi.string()
    .min(3)
    .max(50)
    .required(),

  lastName: Joi.string()
    .min(3)
    .max(50)
    .required(),

  birthDate: Joi.date()
    .required(),

  gender: Joi.string()
    .valid('M', 'F', 'O')
    .required(),

  phone: Joi.string()
    .min(7)
    .max(15)
    .pattern(/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/)
    .required(),

  address: Joi.string()
    .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),

  password: Joi.string()
    .min(8)
    .max(50)
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    .required()
})

exports.createUserAndPatientSchema = Joi.object({
  user: createUserSchema,
  patient: createPatientSchema
})
