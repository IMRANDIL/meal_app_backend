const router = require('express').Router();

const postFavourites = require('../controllers/Favourites');
const postLogin = require('../controllers/Login');
const postLogout = require('../controllers/Logout');
const postAutoLogin = require('../controllers/PostAutoLogin');
const postSignup = require('../controllers/Singnup');
const authUser = require('../middleware/auth')

router.post('/users', postSignup);

router.post('/login', postLogin)



router.post('/auto-login', authUser, postAutoLogin);

router.post('/logout', authUser, postLogout);


router.post('/favourites', authUser, postFavourites)







module.exports = router;