const router = require('express').Router();

const postLogin = require('../controllers/Login');
const postAutoLogin = require('../controllers/PostAutoLogin');
const postSignup = require('../controllers/Singnup');
const authUser = require('../middleware/auth')

router.post('/users', postSignup);

router.post('/login', postLogin)



router.post('/auto-login', authUser, postAutoLogin)







module.exports = router;