var express = require('express');
var router = express.Router();
var eventController = require('../controllers/user');



/* On POST events, pass control to the checkUserCredentials function */
router.post('/', eventController.checkUserCredentials);

/* GET is used to go to the 'sign up' page */
router.get('/', eventController.signupNewUser);

module.exports = router;
