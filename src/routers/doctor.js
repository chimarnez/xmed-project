const express = require('express')
const router = express.Router()

const {
  getDoctors,
  getDdoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor
} = require("../controllers/doctor")


router.get("/doctors", getDoctors);

router.get("/doctors/:id", getDdoctor);

router.post("/doctors", createDoctor);

router.put("/doctors/:id", updateDoctor);

router.delete("/doctors/:id", deleteDoctor);

module.exports = router;
