const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is not correct")
            }
        },
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
})

const User = mongoose.model("User", userSchema)

module.exports = User