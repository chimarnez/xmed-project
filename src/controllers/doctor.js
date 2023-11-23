const {
  findAll,
  findById,
  findInfoById,
  insert,
  update,
  deleteById,
  findByMedicalLicense,
  findBySpecialization
} = require('../services/doctor')

exports.getDoctors = async function (req, res) {
  const { specialization, medicalLicense } = req.query
  let doctors
  if (medicalLicense) {
    const doctor = await findByMedicalLicense(medicalLicense)
    doctors = doctor ? [doctor] : []
  } else if (specialization) {
    doctors = await findBySpecialization(specialization)
  } else {
    doctors = await findAll()
  }
  res.json(doctors)
}

exports.getDoctor = async function (request, response) {
  const { id } = request.user.Doctor
  const doctor = await findById(id)
  response.status(200).json(doctor)
}

exports.getDoctorInfo = async function (request, response) {
  const { id } = request.params
  const doctor = await findInfoById(id)
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
