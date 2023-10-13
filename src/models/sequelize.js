const { Sequelize } = require("sequelize");

const {
  // MYSQL_HOST,
  // MYSQL_PORT,
  // MYSQL_DATABASE,
  // MYSQL_USERNAME,
  // MYSQL_PASSWORD,
  FORCE_DB_UPDATE,
} = process.env;

// If you are using MySQL uncomment this code
// and comment the sequelize instance below

/* const sequelize = new Sequelize({
  dialect: "mysql",
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
}); */

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
    await sequelize.sync({ force: true });
    // await sequelize.sync({ force: FORCE_DB_UPDATE === 'yes' })
    console.log("> DB Updated");
  } catch (e) {
    console.error("> Cannot update DB");
    console.error(e);
  }
};
