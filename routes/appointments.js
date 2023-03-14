const express = require('express');
const router = express.Router();

const appointmentsCtrl = require("../controllers/appointments")

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

router.get("/", loginAuth, appointmentsCtrl.index);
router.get("/new", loginAuth, appointmentsCtrl.new);
router.post("/", loginAuth, appointmentsCtrl.create);
router.get("/:id", loginAuth, appointmentsCtrl.show);

router.post("/:id/visits", loginAuth, occupationAuth, appointmentsCtrl.addVisit);

router.get("/:id/delete", loginAuth, appointmentsCtrl.deletePrompt);
router.delete("/:id", loginAuth, appointmentsCtrl.delete);

router.get("/:id/edit", loginAuth, appointmentsCtrl.edit);
router.put("/:id", loginAuth, appointmentsCtrl.update)


module.exports = router;