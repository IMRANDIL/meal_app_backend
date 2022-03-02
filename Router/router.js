const router = require('express').Router();

const postLogin = require('../controllers/Login');
const postSignup = require('../controllers/Singnup');
const verifyToken = require('../middleware/auth')

router.post('/users', postSignup);

router.post('/login', postLogin)









module.exports = router;