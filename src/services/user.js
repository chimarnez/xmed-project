const User = require("../models/user");

exports.insert = function (data) {
  return User.create(data);
};

exports.findByEmail = function (email) {
  // SELECT * FROM users WHERE email = ?
  return User.findOne({
    where: {
      email,
    },
  });
};

exports.findById = function (id) {
  // SELECT * FROM users WHERE id = ?
  return User.findByPk(id);
};

exports.findAll = function () {
  return User.findAll();
};

exports.update = async function (id, data) {
  await User.update(data, { where: { id } });
};

exports.deleteById = async function (id) {
  const patient = await User.findByPk(id);
  await patient.destroy();
};
