const Medicine = require("../models/medicine");
const Appointment = require("../models/appointment");



const newMedicine = async (req,res) => {
    const medicines = await Medicine.find().sort("speciality").exec();
    const context = {title:"Medicine List", msg:"", medicines}
    res.render("medicines/new", context)
};

const create = async (req,res) => {
    try {
        const medicine = await Medicine.create(req.body);
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


module.exports = {
    new: newMedicine,
    create,
    addToMedicine,
}