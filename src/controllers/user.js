const {
  insert,
  update,
  findById,
  findAll,
  deleteById,
  findByIdWithDoctor
} = require('../services/user')
// const { insert: insertPatient } = require('../services/patient')

exports.createUser = async function (request, response) {
  const data = request.body
  const user = await insert(data)
  response.status(201).json(user)
}

exports.updateUser = async function (request, response) {
  // const { id } = request.params
  const { id } = request.user
  const data = request.body
  await update(id, data)
  response.status(204).end()
}

exports.getUser = async function (request, response) {
  const user = await findById(request.user.id)
  response.status(200).json(user)
}

exports.getUserById = async function (request, response) {
  // const { id } = request.params
  const user = await findById(request.user.id)
  response.status(200).json(user)
}

exports.getUsers = async function (request, response) {
  const users = await findAll()
  response.status(200).json(users)
}

exports.deleteUser = async function (request, response) {
  // const { id } = request.params
  const { id } = request.user

  await deleteById(id)
  response.status(204).end()
}

exports.getUserRole = async function (request, response) {
  // const { id } = request.params
  const { id } = request.user
  const user = await findByIdWithDoctor(id)
  // {
  //   "message":'Successfully uploaded ',
  //   "file": fileOriginalName
  // }
  response.status(200).json(user)
}

// exports.createUser = async function (req, res) {
//   const { user: userData, patient: patientData } = req.body;
//   try {
//     const user = await insert(userData);
//     const patient = await insertPatient({
//       ...patientData,
//       UserId: user.id,
//     });
//     console.log(patient);
//     res.status(201).json({
//       user,
//       patient,
//     });
//   } catch (err) {
//     res.status(400).json({
//       message: err,
//     });
//   }
// };
