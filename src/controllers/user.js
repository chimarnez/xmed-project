const { insert } = require('../services/user')
const { insert: insertPatient } = require('../services/patient')

exports.createUser = async function (req, res) {
  const { user: userData, patient: patientData } = req.body
  try {
    const user = await insert(userData)
    const patient = await insertPatient({
      ...patientData,
      UserId: user.id
    })
    console.log(patient)
    res.status(201).json({
      user,
      patient
    })
  } catch (err) {
    res.status(400).json({
      message: err
    })
  }
}
