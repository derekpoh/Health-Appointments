const express = require('express');
const router = express.Router();

const medicinesCtrl = require("../controllers/medicines")

const isAuth = async (req,res,next) => {
    if (req.session.userid) {
        next()
    } else {
        res.status(403).send("PLEASE LOGIN TO CONTINUE")
    }
}

const occupationAuth = async (req,res,next) => {
    if (req.session.occupation === "doctor") {
        next()
    } else {
        res.status(403).send("Only Doctors may access this function");
    }
}


router.get("/medicines/new", isAuth, medicinesCtrl.new);
router.post("/medicines", isAuth, occupationAuth, medicinesCtrl.create);
router.post("/appointments/:id/medicines", isAuth, occupationAuth, medicinesCtrl.addToMedicine)

module.exports = router;