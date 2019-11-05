var express = require('express');
var router = express.Router();
var eventController = require('../controllers/user');



/* On POST events, pass control to the checkUserCredentials function */
router.post('/', eventController.checkUserCredentials);

router.get('/', eventController.signupNewUser);

module.exports = router;
