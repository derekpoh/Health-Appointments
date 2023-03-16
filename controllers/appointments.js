const Appointment = require("../models/appointment");
const Medicine = require("../models/medicine");
const User = require("../models/user")


const index = async (req,res) => {
    const user = await User.findOne({_id: req.session.userid}).populate("appointment").exec()
    const appointments = user.appointment
    const context = {title:"All Appointments", appointments}
    res.render("appointments/index", context)
}

const newAppointment = (req,res) => {
    const context = {title:"Add Appointment", msg:""};
    res.render("appointments/new", context)
}

const create = async (req,res) => {
    try {
        const user = await User.findOne({_id: req.session.userid});
        const appointment = await Appointment.create(req.body);
        user.appointment.push(appointment._id);
        await user.save()
        res.redirect("/appointments/");
    } catch (err) {
        const context = {title:"Add Appointment", msg:"VALID DATE REQUIRED"};
        res.render("appointments/new", context)
    }
}

const show = async (req,res) => {
    const user = await User.findOne({_id: req.session.userid}).populate("medicine").exec()
    const appointment = await Appointment.findById(req.params.id).populate("medicine").exec();
    const medicines = await Medicine.find({
        "$and": [
            {_id: {$nin: appointment.medicine}},
            {_id: {$in: user.medicine}}
        ]
        });
        const context = {title:"", appointment, medicines};
        res.render("appointments/show", context);
    }


const addVisit = async (req,res) => {
    try {
        const appointment = await Appointment.findById(req.params.id).exec();
        appointment.visit.push(req.body);
        await appointment.save();
        res.redirect(`/appointments/${appointment._id}`)
    } catch (err) {
        const appointment = await Appointment.findById(req.params.id).exec();
        res.redirect(`/appointments/${appointment._id}`)
    }
}

const deletePrompt = async (req,res) => {
    const appointment = await Appointment.findById(req.params.id).exec();
    context = {title:"", appointment}
    res.render("appointments/delete", context)
};

const deleteAppointment = async (req,res) => {
    const user = await User.findOne({_id: req.session.userid});
    const appointment = await Appointment.findByIdAndDelete(req.params.id).exec();
    const spliceNumber = user.appointment.indexOf(appointment._id);
    user.appointment.splice(spliceNumber, 1);
    await user.save();
    res.redirect("/appointments/");
}

const edit = async (req,res) => {
    const appointment = await Appointment.findById(req.params.id).exec();
    context = {title:"", msg:"", appointment};
    res.render("appointments/edit", context);
}

const update = async (req,res) => {
    const opts = {runValidators:true};
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
    }
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, opts).exec();
        res.redirect("/appointments/");
        } catch (err) {
            const appointment = await Appointment.findById(req.params.id).exec();
            context = {title:"", msg:"VALID DATE REQUIRED", appointment};
            res.render("appointments/edit", context);
        }
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