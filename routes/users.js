const express = require('express');
const router = express.Router();

const usersCtrl = require("../controllers/users");
const user = require('../models/user');


const loginAuth = async (req,res,next) => {
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


router.get("/login", usersCtrl.index);
router.post("/login", usersCtrl.login);

router.get("/login/create", usersCtrl.new);
router.post("/login/create", usersCtrl.create);

router.get("/logout", usersCtrl.logout)

router.get("/patients", loginAuth, occupationAuth, usersCtrl.patientList);
router.get("/patients/:id", loginAuth, occupationAuth, usersCtrl.selectPatient)

module.exports = router;
