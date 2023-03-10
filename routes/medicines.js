const express = require('express');
const router = express.Router();

const medicinesCtrl = require("../controllers/medicines")


router.get("/medicines/new", medicinesCtrl.new)

module.exports = router;