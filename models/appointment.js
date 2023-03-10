const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema (
    {
        institution: {
            type: String,
        },
        speciality: {
            type: String,
        },
        date: {
            type: Date
        },
        timeslot: {
            type: Number
        },
        medicine: {
            type: [String]
        },
        visit: {
            type: [String]
        }
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("Appointment", appointmentSchema)