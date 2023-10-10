const { connect, sync } = require("./models/sequelize");
const Patient = require("./models/patient");
const Doctor = require("./models/doctor");
const Record = require("./models/record");

Patient.hasMany(Record);
Record.belongsTo(Patient);

Doctor.hasMany(Record);
Record.belongsTo(Doctor);

exports.initDatabase = async function () {
  await connect();
  await sync();
};
