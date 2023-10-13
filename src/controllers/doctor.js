const {
  findAll,
  findById,
  insert,
  update,
  deleteById,
} = require("../services/doctor");

exports.getDoctors = async function (request, response) {
  const doctors = await findAll();
  response.status(200).json(doctors);
};

exports.getDdoctor = async function (request, response) {
  const { id } = request.params;
  const doctor = await findById(id);
  response.status(200).json(doctor);
};

exports.createDoctor = async function (request, response) {
  // TODO : restructure data
  const data = request.body;
  const doctor = await insert(data);
  response.status(201).json(doctor);
};

exports.updateDoctor = async function (request, response) {
  const { id } = request.params;
  // TODO : restructure data
  const data = request.body;   
  await update(id, data);
  response.status(204).end();
};

exports.deleteDoctor = async function (request, response) {
  const { id } = request.params;
  await deleteById(id);
  response.status(204).end();
};
