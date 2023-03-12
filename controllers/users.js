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
            req.session.occupation = user.occupation;
            res.redirect("/appointments")
        } else {
            const context = {msg: "ENTER VALID PASSWORD"}
            res.render("users/login", context);
        }
    })
}           

const newAccount = (req,res) => {
    const context = {msg: ""}
    res.render("users/new", context)
}

const create = async (req,res) => {
    try {
        const user = await User.create(req.body);
        seed(user);
        res.redirect("/users/login") ;   
    } catch (err) {
        const context = {msg: err}
        res.render("users/new", context)
        console.log(err)
    }
}

const seed = async (user) => {
        bcrypt.hash(user.password, saltRounds, async (err, hash) => {
            user.password = hash;
            user.save()
        })
    }

const logout = (req,res) => {
    req.session.userid = "";
    req.session.occupation = "";
    res.redirect("/")
}


module.exports = {
    index,
    new: newAccount,
    create,
    login,
    logout,
}