
const User = require('../models/Signup')







const postFavourites = async (req, res, next) => {

    try {

        const { mealId } = req.body;
        const user = req.user;

        user.favourites.push(mealId);
        await user.save();
        res.status(200).send(user);


        next()


    } catch (error) {
        console.log(error);
    }




}



module.exports = postFavourites;