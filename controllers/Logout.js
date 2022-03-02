


const postLogout = async (req, res, next) => {

    try {
        const user = req.user;
        user.token = '';
        await user.save();
        return res.status(200).send()
    } catch (error) {
        console.log(error);
    }

}


module.exports = postLogout;