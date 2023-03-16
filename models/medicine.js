const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema =  new Schema (
    {
        name: {
            type: String,
            required: true,
        },
        speciality: {
            type: String,
            required: true,
            enum: ["Cardiology", "Endocrine", "Gastroenterology", "Infectious Disease", "Neurology", "Pain Management", "Nephrology"]
        },
        regimen: {
            type: String,
            required: true,

        },
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("Medicine", medicineSchema)