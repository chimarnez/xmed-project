const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./xmed.db",
});

exports.sequelize = sequelize;

exports.connect = async function () {
  try {
    await sequelize.authenticate();
    console.log("> Connected to DB");
  } catch (e) {
    console.error("> Unable to connect DB");
    console.error(e);
  }
};

exports.sync = async function () {
  try {
    await sequelize.sync({ force: FORCE_DB_UPDATE === "yes" });
    console.log("> DB Updated");
  } catch (e) {
    console.error("> Cannot update DB");
    console.error(e);
  }
};
