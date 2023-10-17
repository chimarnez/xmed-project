const { save, findById, updateById, deleteById, findByPatientId, findByDoctorId } = require('../services/record')

exports.createRecord = async function (req, res) {
  const { id: DoctorId } = req.user.Doctor
  const recordData = req.body
  const record = await save({ ...recordData, DoctorId })
  return res.status(201).json(record)
}

exports.getRecordById = async function (req, res) {
  const { id } = req.params
  const record = await findById(id)
  return res.status(200).json(record)
}

exports.getRecordsFromDoctorByPatientId = async function (req, res) {
  const { id: PatientId } = req.params
  const records = await findByPatientId(PatientId)
  return res.status(200).json(records)
}

exports.getRecordsByPatientId = async function (req, res) {
  const { id: PatientId } = req.user.Patient
  const records = await findByPatientId(PatientId)
  return res.status(200).json(records)
}

exports.getRecordByDoctorId = async function (req, res) {
  const { id: DoctorId } = req.user.Doctor
  const records = await findByDoctorId(DoctorId)
  return res.status(200).json(records)
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
