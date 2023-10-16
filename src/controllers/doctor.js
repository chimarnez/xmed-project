const {
  findAll,
  findById,
  insert,
  update,
  deleteById
} = require('../services/doctor')

exports.getDoctors = async function (request, response) {
  const doctors = await findAll()
  response.status(200).json(doctors)
}

exports.getDoctor = async function (request, response) {
  const { id } = request.user.Doctor
  const doctor = await findById(id)
  response.status(200).json(doctor)
}

exports.createDoctor = async function (request, response) {
  // TODO : restructure data
  const data = request.body
  const { id: UserId } = request.user
  const doctor = await insert({ ...data, UserId })
  response.status(201).json(doctor)
}

exports.updateDoctor = async function (request, response) {
  const { id } = request.user.Doctor
  const data = request.body
  await update(id, data)
  response.status(204).end()
}

exports.deleteDoctor = async function (request, response) {
  const { id } = request.user.Doctor
  await deleteById(id)
  response.status(204).end()
}
