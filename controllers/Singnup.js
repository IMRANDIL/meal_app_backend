const User = require('../models/Signup')






const postSignup = async (req, res, next) => {

    try {
        const user = await User.create(req.body);
        res.status(201).json(user);

    } catch (error) {
        return res.status(500).send(error)

    }
    next()
}





module.exports = postSignup;