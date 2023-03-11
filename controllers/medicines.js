const Medicine = require("../models/medicine");
const Appointment = require("../models/appointment");



const newMedicine = async (req,res) => {
    const medicines = await Medicine.find().sort("speciality").exec();
    const context = {title:"Add Medicine", medicines}
    res.render("medicines/new", context)
};

const create = (req,res) => {
    Medicine.create(req.body);
    res.redirect("medicines/new")
};  

const addToMedicine = async (req,res) => {
    const appointment = await Appointment.findById(req.params.id).exec();
    appointment.medicine.push(req.body.medicineName);
    appointment.save();
    res.redirect(`/appointments/${appointment._id}`)
};


module.exports = {
    new: newMedicine,
    create,
    addToMedicine,
}