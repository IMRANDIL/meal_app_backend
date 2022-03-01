const User = require('../models/Signup')

const bcrypt = require('bcrypt')



const postLogin = async (req, res, next) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne();

        if (user.email !== email) {
            return res.status(400).json({ msg: 'Invalid Credentials!' })
        }

        const matchPassword = bcrypt.compareSync(password, user.password);

        if (!matchPassword) {
            return res.status(400).json({ msg: 'Invalid Credentials!' })
        }
        res.status(200).send(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'something went wrong!' })
    }

}



module.exports = postLogin;