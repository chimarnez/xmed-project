const express = require("express");

const router = express.Router();

// create patient
router.post("/patients");
// get patient
router.get("/patients/:id");
// list all patients
router.get("/patients");
// update patient
router.put("/patients/:id");
// delete patient
router.delete("/patients/:id");

module.exports = router;
