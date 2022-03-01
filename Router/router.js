const router = require('express').Router();

const postLogin = require('../controllers/Login');
const postSignup = require('../controllers/Singnup');

router.post('/users', postSignup);

router.post('/login', postLogin)









module.exports = router;