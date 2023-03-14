const Medicine = require("../models/medicine");
const Appointment = require("../models/appointment");
const User = require("../models/user")



const newMedicine = async (req,res) => {
    const user = await User.findOne({_id: req.session.userid}).populate("medicine").exec();
    const medicines = user.medicine
    const context = {title:"Medicine List", msg:"", medicines}
    res.render("medicines/new", context)
};

const create = async (req,res) => {
    try {
        const user = await User.findOne({_id: req.session.userid});
        const medicine = await Medicine.create(req.body);
        user.medicine.push(medicine._id);
        await user.save();
        res.redirect("/medicines/new")
    } catch (err) {
        res.redirect("/medicines/new")
    }
    };     

const addToMedicine = async (req,res) => {
    if (req.body.medicineName) {
        const appointment = await Appointment.findById(req.params.id).exec();
        appointment.medicine.push(req.body.medicineName);
        await appointment.save();
        res.redirect(`/appointments/${appointment._id}`)
    } else {
        const appointment = await Appointment.findById(req.params.id).exec();
        res.redirect(`/appointments/${appointment._id}`)
    }
};

const edit = async (req,res) => {
    const medicine = await Medicine.findById(req.params.id);
    const context = {title:"Update Medicine", msg:"", medicine};
    res.render("medicines/edit", context)
}

const update = async (req,res) => {
    for (let key in req.body) {
        req.body.name = req.body.name.trim();
        req.body.regimen = req.body.regimen.trim();
        if (req.body[key] === "") return res.redirect("/medicines/new");
      }
    const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, {new:true}).exec();
    res.redirect("/medicines/new");
}

const deletePrompt = async (req,res) => {
    const medicine = await Medicine.findById(req.params.id);
    const context = {title:"Delete Medicine", medicine}
    res.render("medicines/delete", context)
}

const deleteMed = async (req,res) => {
    const user = await User.findOne({_id: req.session.userid});
    const medicine = await Medicine.findByIdAndDelete(req.params.id).exec();
    const spliceNum = user.medicine.indexOf(medicine._id);
    user.medicine.splice(spliceNum, 1);
    await user.save();
    res.redirect("/medicines/new");
}

module.exports = {
    new: newMedicine,
    create,
    addToMedicine,
    edit,
    update,
    deletePrompt,
    delete: deleteMed,
}