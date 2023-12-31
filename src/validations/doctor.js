const Joi = require('joi')
const { optional } = require('./validation')

const schema = Joi.object({
  // UserId: Joi.alternatives([Joi.number(), Joi.string()]).required(),
  specialization: Joi.string().min(5).max(100).alter(optional),
  medicalLicense: Joi.string().alphanum().min(5).max(100).alter(optional)
})

exports.createDoctorsSchema = schema.tailor('post')
exports.updateDoctorsSchema = schema.tailor('put')
