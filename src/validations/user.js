const Joi = require("joi");
const { optional } = require("./validation");

// const { createPatientSchema } = require('./patient')

const schema = Joi.object({
  firstName: Joi.string().min(3).max(50).alter(optional),

  lastName: Joi.string().min(3).max(50).alter(optional),

  birthDate: Joi.date().alter(optional),

  gender: Joi.string().valid("M", "F", "O").alter(optional),

  phone: Joi.string()
    .min(7)
    .max(15)
    .pattern(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/
    )
    .alter(optional),

  address: Joi.string().alter(optional),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .alter(optional),

  password: Joi.string()
    .min(8)
    .max(50)
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    .alter(optional),
});

exports.createUserSchema = schema.tailor("post");
exports.updateUserSchema = schema.tailor("put");

// exports.createUserAndPatientSchema = Joi.object({
//   user: createUserSchema,
//   patient: createPatientSchema
// })
