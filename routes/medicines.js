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

router.get("/medicines/new", isAuth, medicinesCtrl.new);
router.post("/medicines", isAuth, medicinesCtrl.create);
router.post("/appointments/:id/medicines", isAuth, medicinesCtrl.addToMedicine)

module.exports = router;