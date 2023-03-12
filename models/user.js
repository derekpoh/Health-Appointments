const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userid: {
            type: String,
            required: [true, "USERID IS REQUIRED"],
            unique: [true, "USERID IS ALREADY IN USE"]
        },
        password: {
            type: String,
            required: [true, "PASSWORD is REQUIRED"]
        },
        occupation: {
            type: String,
            required: true
        },
    }, {
        timestamps: true
    })

module.exports = mongoose.model("User", userSchema)