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
  const { id } = request.params
  const patient = await findById(id)
  response.status(200).json(patient)
}
exports.createPatient = async function (request, response) {
  // TODO : restructure data
  const data = request.body
  const patient = await insert(data)
  response.status(201).json(patient)
}

exports.updatePatient = async function (request, response) {
  const { id } = request.params
  // TODO : restructure data
  const data = request.body
  await update(id, data)

  response.status(204).end()
}

exports.deletePatient = async function (request, response) {
  const { id } = request.params
  await deleteById(id)
  response.status(204).end()
}
