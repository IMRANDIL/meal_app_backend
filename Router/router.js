const router = require('express').Router();

const postFavourites = require('../controllers/Favourites');
const postLogin = require('../controllers/Login');
const postLogout = require('../controllers/Logout');
const postAutoLogin = require('../controllers/PostAutoLogin');
const postRemoveFav = require('../controllers/RemoveFav');
const postSignup = require('../controllers/Singnup');
const authUser = require('../middleware/auth')

router.post('/users', postSignup);

router.post('/login', postLogin)



router.post('/auto-login', authUser, postAutoLogin);

router.post('/logout', authUser, postLogout);


router.post('/add-favourites', authUser, postFavourites);


router.post('/remove-favourites', authUser, postRemoveFav)







module.exports = router;