const Patient = require("../models/patient");

exports.findAll = function () {
  return Patient.findAll();
};

exports.findById = function (id) {
  return Patient.findByPk(id);
};

exports.insert = function (data) {
  return Patient.create(data);
};

exports.update = async function (id, data) {
  await Patient.update(data, { where: { id } });
};

exports.deleteById = async function (id) {
  const patient = await Patient.findByPk(id);
  await patient.destroy();
};
