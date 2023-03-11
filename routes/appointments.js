const express = require('express');
const router = express.Router();

const appointmentsCtrl = require("../controllers/appointments")

const isAuth = async (req,res,next) => {
    if (req.session.userid) {
        next()
    } else {
        res.status(403).send("PLEASE LOGIN TO CONTINUE")
    }
}

router.get("/", isAuth, appointmentsCtrl.index);
router.get("/new", isAuth, appointmentsCtrl.new);
router.post("/", isAuth, appointmentsCtrl.create);
router.get("/:id", isAuth, appointmentsCtrl.show);

router.post("/:id/visits", isAuth, appointmentsCtrl.addVisit);

router.get("/:id/delete", isAuth, appointmentsCtrl.deletePrompt);
router.delete("/:id", isAuth, appointmentsCtrl.delete);

router.get("/:id/edit", isAuth, appointmentsCtrl.edit);
router.put("/:id", isAuth, appointmentsCtrl.update)


module.exports = router;