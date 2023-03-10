const Appointment = require("../models/appointment")
const Medicine = require("../models/medicine")


const index = async (req,res) => {
    const appointments = await Appointment.find().exec()
    const context = {appointments}
    res.render("appointments/index", context)
}

const newAppointment = (req,res) => {
    res.render("appointments/new")
}

const create = (req,res) => {
    Appointment.create(req.body);
    res.redirect("appointments/new");
}

const show = async (req,res) => {
    const appointment = await Appointment.findById(req.params.id).populate("medicine").exec();
    const medicines = await Medicine.find(
        {_id: {$nin: appointment.medicine}}
        ).exec()
    const context = {appointment, medicines};
    res.render("appointments/show", context);
}

const addVisit = async (req,res) => {
    const appointment = await Appointment.findById(req.params.id).exec();
    appointment.visit.push(req.body);
    appointment.save();
    res.redirect(`/appointments/${appointment._id}`)
}

module.exports = {
    index,
    new: newAppointment,
    create,
    show,
    addVisit
}