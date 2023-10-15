const {
  findAll,
  findById,
  insert,
  update,
  deleteById
} = require('../services/patient')

exports.getPatients = async function (request, response) {
  const patients = await findAll()
  response.status(200).json(patients)
}

exports.getPatient = async function (request, response) {
  const { id } = request.user.Patient
  const patient = await findById(id)
  response.status(200).json(patient)
}
exports.createPatient = async function (request, response) {
  // TODO : restructure data
  const data = request.body
  const patient = await insert({ ...data, UserId: request.user.id })
  response.status(201).json(patient)
}

exports.updatePatient = async function (request, response) {
  const { id } = request.user.Patient
  const { id: UserId } = request.user
  // TODO : restructure data
  const data = request.body
  await update(id, { ...data, UserId })

  response.status(204).end()
}

exports.deletePatient = async function (request, response) {
  const { id } = request.user.Patient
  await deleteById(id)
  response.status(204).end()
}
