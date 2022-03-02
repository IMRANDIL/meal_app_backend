


const postLogout = async (req, res, next) => {

    try {
        const user = req.user;

        user.token = '';
        await user.save();
        res.status(200).send()
        next()
    } catch (error) {
        console.log(error);
    }


}


module.exports = postLogout;