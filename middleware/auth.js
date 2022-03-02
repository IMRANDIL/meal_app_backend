const jwt = require("jsonwebtoken");

const User = require('../models/Signup')

const config = process.env;



const authUser = async (req, res, next) => {
    try {
        const userToken = req.header('Authorization').replace('Bearer ', '');

        const decodedToken = jwt.verify(userToken, config.TOKEN_KEY);
        // console.log(decodedToken);
        const user = await User.findOne({ _id: decodedToken._id });
        if (!user) {
            return res.status(404).json('You are not authorized!')
        }

        req.user = user;


    } catch (error) {
        console.log(error);
        res.status(500).send('something happened')
    }
    next()
}

















// const verifyToken = (req, res, next) => {
//     const token =
//         req.body.token || req.query.token || req.headers["x-access-token"];

//     if (!token) {
//         return res.status(403).send("A token is required for authentication");
//     }
//     try {
//         const decoded = jwt.verify(token, config.TOKEN_KEY);
//         req.user = decoded;
//     } catch (err) {
//         return res.status(401).send("Invalid Token");
//     }
//     return next();
// };

module.exports = authUser;