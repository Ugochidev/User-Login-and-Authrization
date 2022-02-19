const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    fullName: {
        "type": String,
        required: [true, "pls input full name"]
    },
    email: {
        "type": String,
        required: [true, "pls input first email"],
        lowercase: true
    },
    password: {
        "type": String,
        required: [true, "pls input first password"]
    }
});

const User = mongoose.model("Login", loginSchema);

module.exports = User;
