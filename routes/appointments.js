const express = require('express');
const router = express.Router();

const appointmentsCtrl = require("../controllers/appointments")

router.get("/", appointmentsCtrl.index)
router.get("/new", appointmentsCtrl.new)
router.post("/", appointmentsCtrl.create)
router.get("/:id", appointmentsCtrl.show)

module.exports = router;