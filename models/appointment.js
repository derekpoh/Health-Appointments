const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MSECONDSPERDAY = 86400000

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
            required: true,
            enum: ["Alexandra Hospital", "Changi General Hospital", "Khoo Teck Phuat Hospital", "National University Hospital", "Ng Teng Fong General Hospital", "Sengkang General Hospital", "Singapore General Hospital", "Tan Tock Seng Hospital"]
        },
        speciality: {
            type: String,
            required: true,
            enum: ["Cardiology", "Endocrine", "Gastroenterology", "Infectious Disease", "Neurology", "Pain Management", "Nephrology"]
        },
        date: {
            type: Date,
            required: true,
            min: new Date(new Date() - MSECONDSPERDAY),
        },
        timeslot: {
            type: String,
            required: true,
            enum: ["09:00 am", "09:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm"]
        },
        medicine: [{
            type: Schema.Types.ObjectId,
            ref: "Medicine"
        }],
        visit: [visitSchema],
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model("Appointment", appointmentSchema)