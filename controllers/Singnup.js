const User = require('../models/Signup')






const postSignup = async (req, res, next) => {

    try {
        const user = await User.create(req.body);
        return res.status(201).json(user);

    } catch (error) {
        res.status(500).json({ error: 'Email Already Exists!' })

    }
    next()
}





module.exports = postSignup;