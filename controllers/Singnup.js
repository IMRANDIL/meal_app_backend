const User = require('../models/Signup')






const postSignup = async (req, res, next) => {

    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
        next()
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
}





module.exports = postSignup;