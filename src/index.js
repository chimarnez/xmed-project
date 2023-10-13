require("dotenv").config();
const express = require("express");
const app = express();

const { initDatabase } = require("./db");
initDatabase();

app.use(express.json());

// routers
const userRouter = require("./routers/user");
const patientRouter = require("./routers/patient");

const validationEerror = require("./middlewares/validation-error");

// Routes
app.use("/users", userRouter);
app.use("/patients", patientRouter);

// Error handler
app.use(validationEerror);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`> Listening in port :${process.env.SERVER_PORT}`);
});
