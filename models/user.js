const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        userid: {
            type: String,
        },
        password: {
            type: String,
        },
        occupation: {
            type: String,
        },
    }, {
        timestamps: true
    })

module.exports = mongoose.model("User", userSchema)