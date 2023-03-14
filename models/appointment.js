const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitSchema = new Schema ({
    content: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const appointmentSchema = new Schema (
    {
        institution: {
            type: String,
            required: true
        },
        speciality: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true,
        },
        timeslot: {
            type: String,
            required: true
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