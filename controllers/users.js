const User = require("../models/user");
const bcrypt = require("bcrypt");

const saltRounds = 10;


const index = (req,res) => {
    const context = {msg: ""}
    res.render("users/login", context);
}

const login = async (req,res) => {
    const {userid, password} = req.body;
    const user = await User.findOne({userid}).exec();
    if (user === null) {
        const context = {msg: "ENTER VALID USERID"}
        res.render("users/login", context);
        return
    }
    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            req.session.userid = user._id;
            res.redirect("/appointments")
        } else {
            const context = {msg: "ENTER VALID PASSWORD"}
            res.render("users/login", context);
        }
    })
}           

const newAccount = (req,res) => {
    res.render("users/new")
}

const create = async (req,res) => {
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        const user = await User.create({userid:req.body.userid, password:hash, occupation:req.body.occupation});
        res.redirect("/users/login")
    })
}



module.exports = {
    index,
    new: newAccount,
    create,
    login
}