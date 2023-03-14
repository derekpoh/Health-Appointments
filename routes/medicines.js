const express = require('express');
const router = express.Router();

const medicinesCtrl = require("../controllers/medicines")

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


router.get("/medicines/new", loginAuth, medicinesCtrl.new);
router.post("/medicines", loginAuth, occupationAuth, medicinesCtrl.create);

router.post("/appointments/:id/medicines", loginAuth, occupationAuth, medicinesCtrl.addToMedicine);

router.get("/medicines/:id/edit", loginAuth, occupationAuth, medicinesCtrl.edit);
router.put("/medicines/:id", loginAuth, occupationAuth, medicinesCtrl.update);

router.get("/medicines/:id/delete", loginAuth, occupationAuth, medicinesCtrl.deletePrompt);
router.delete("/medicines/:id", loginAuth, occupationAuth, medicinesCtrl.delete)



module.exports = router;