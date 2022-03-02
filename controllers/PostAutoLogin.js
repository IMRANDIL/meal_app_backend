



const postAutoLogin = async (req, res, next) => {
    try {
        return res.send(req.user)
    } catch (error) {
        console.log(error);
    }

    next()

}




module.exports = postAutoLogin;