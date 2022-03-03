


const postRemoveFav = async (req, res, next) => {

    try {

        const { mealId } = req.body;
        const user = req.user;

        user.favourites = user.favourites.filter((id) => id !== mealId)
        await user.save();
        res.status(200).send(user);


        next()


    } catch (error) {
        console.log(error);
    }

}




module.exports = postRemoveFav;