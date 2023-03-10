const express = require('express');
const router = express.Router();

const medicinesCtrl = require("../controllers/medicines")


router.get("/medicines/new", medicinesCtrl.new);
router.post("/medicines", medicinesCtrl.create);
router.post("/appointments/:id/medicines", medicinesCtrl.addToMedicine)

module.exports = router;