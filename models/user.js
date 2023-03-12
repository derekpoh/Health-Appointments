const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userid: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        occupation: {
            type: String,
            required: true
        },
    }, {
        timestamps: true
    })

module.exports = mongoose.model("User", userSchema)