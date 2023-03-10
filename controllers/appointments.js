const Appointment = require("../models/appointment")


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
    const appointment = await Appointment.findById(req.params.id).exec();
    const context = {appointment}
    res.render("appointments/show", context)
}

module.exports = {
    index,
    new: newAppointment,
    create,
    show,
}