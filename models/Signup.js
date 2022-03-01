
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please Pass the userName😀'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please Pass the email😀'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please Pass the password😀'],
    },
    token: {
        type: String,

    }
})


module.exports = mongoose.model('User', userSchema)