const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitSchema = new Schema ({
    content: {
        type: String,
    }
}, {
    timestamps: true,
})

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
        medicine: [{
            type: Schema.Types.ObjectId,
            ref: "Medicine"
        }],
        visit: [visitSchema]
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model("Appointment", appointmentSchema)