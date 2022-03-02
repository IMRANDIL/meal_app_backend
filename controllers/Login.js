const User = require('../models/Signup')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const postLogin = async (req, res, next) => {



    try {

        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });
        // console.log(user);

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { _id: user._id },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "24h",
                }
            );

            // save user token
            user.token = token;
            await user.save()

            // user
            return res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");

        next()

    } catch (error) {
        console.log(error);

    }


}



module.exports = postLogin;