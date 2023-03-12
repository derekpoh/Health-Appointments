const Appointment = require("../models/appointment")
const Medicine = require("../models/medicine")


const index = async (req,res) => {
    const appointments = await Appointment.find().exec()
    const context = {title:"All Appointments", appointments}
    res.render("appointments/index", context)
}

const newAppointment = (req,res) => {
    res.render("appointments/new", {title:"Add Appointment"})
}

const create = (req,res) => {
    Appointment.create(req.body);
    res.redirect("/appointments/");
}

const show = async (req,res) => {
    const appointment = await Appointment.findById(req.params.id).populate("medicine").exec();
    const medicines = await Medicine.find(
        {_id: {$nin: appointment.medicine}}
        ).exec()
    const context = {title:"" ,appointment, medicines};
    res.render("appointments/show", context);
}

const addVisit = async (req,res) => {
    const appointment = await Appointment.findById(req.params.id).exec();
    appointment.visit.push(req.body);
    appointment.save();
    res.redirect(`/appointments/${appointment._id}`)
}

const deletePrompt = async (req,res) => {
    const appointment = await Appointment.findById(req.params.id).exec();
    context = {title:"", appointment}
    res.render("appointments/delete", context)
};

const deleteAppointment = async (req,res) => {
    const appointment = await Appointment.findByIdAndDelete(req.params.id).exec();
    res.redirect("/appointments/");
}

const edit = async (req,res) => {
    const appointment = await Appointment.findById(req.params.id).exec();;
    context = {title:"", appointment}
    res.render("appointments/edit", context)
}

const update = async (req,res) => {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {new:true}).exec();
    res.redirect("/appointments/");
}

module.exports = {
    index,
    new: newAppointment,
    create,
    show,
    addVisit,
    deletePrompt,
    delete: deleteAppointment,
    edit,
    update
}