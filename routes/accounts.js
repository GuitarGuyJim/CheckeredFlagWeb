var express = require('express');
var router = express.Router();
var eventController = require('../controllers/accounts');



/* On POST events, pass control to the checkUserCredentials function */
router.post('/', eventController.createNewAccount);

module.exports = router;
