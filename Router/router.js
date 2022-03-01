const router = require('express').Router();

const postSignup = require('../controllers/Singnup');

router.post('/users', postSignup)









module.exports = router;