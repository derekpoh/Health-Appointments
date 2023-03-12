const express = require('express');
const router = express.Router();

const usersCtrl = require("../controllers/users")

router.get("/login", usersCtrl.index);
router.post("/login", usersCtrl.login);

router.get("/login/create", usersCtrl.new);
router.post("/login/create", usersCtrl.create);

router.get("/logout", usersCtrl.logout)

module.exports = router;
