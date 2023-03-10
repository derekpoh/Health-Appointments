const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema =  new Schema (
    {
        name: {
            type: String,
        },
        speciality: {
            type: String,
        },
        regimen: {
            type: String,
        },
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("Medicine", medicineSchema)