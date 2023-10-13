const express = require("express");

const router = express.Router();

const {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patient");

router.get("/patients", getPatients);

router.get("/patients/:id", getPatient);

router.post("/patients", createPatient);

router.put("/patients/:id", updatePatient);

router.delete("/patients/:id", deletePatient);

module.exports = router;
