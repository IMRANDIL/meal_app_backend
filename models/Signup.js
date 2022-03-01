
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please Pass the userName😀'],
       
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


userSchema.pre('save', function (next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();



    // hash the password using our new salt
    bcrypt.hash(user.password, 12, function (err, hash) {
        if (err) return next(err);
        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });

});




module.exports = mongoose.model('User', userSchema)