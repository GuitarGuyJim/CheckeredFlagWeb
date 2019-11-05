var express = require('express');
var router = express.Router();
var eventController = require('../controllers/events');

/* GET the calendar page */
router.get('/', eventController.event_list);

module.exports = router;
