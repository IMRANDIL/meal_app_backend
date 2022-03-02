const User = require('../models/Signup')

const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')


const postSignup = async (req, res, next) => {

    try {
        const { userName, email, password } = req.body;
        // Validate user input
        if (!(email && password && userName)) {
            res.status(400).send("All input is required");
        }


        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }




        //Encrypt user password
        const encryptedPassword = await bcrypt.hash(password, 10);




        // Create user in our database
        const user = await User.create({
            userName: userName,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });




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
        // return new user
        res.status(201).json(user);









    } catch (error) {
        console.log(error);

    }
    next()
}





module.exports = postSignup;