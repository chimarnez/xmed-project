const { save, findById, updateById, deleteById } = require('../services/record')

exports.createRecord = async function (req, res) {
  const recordData = req.body
  const record = await save(recordData)
  return res.status(201).json(record)
}

// TODO: Waiting for authentication to be implemented
// exports.getRecords = async function (req, res) {
//   const { id, role } = req.user

//   if (role === 'doctor') {
//     const records = await findByDoctorId(id)
//   }

//   if (role === 'patient') {
//     const records = await findByPatientId(id)
//   }

//   return res.status(200).json(records)
// }

exports.getRecord = async function (req, res) {
  const { id } = req.params
  const record = await findById(id)
  return res.status(200).json(record)
}

exports.updateRecord = async function (req, res) {
  const { id } = req.params
  const recordData = req.body
  await updateById(id, recordData)
  return res.status(204).end()
}

exports.deleteRecord = async function (req, res) {
  const { id } = req.params
  await deleteById(id)
  return res.status(204).end()
}
