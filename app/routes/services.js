var express = require('express');
var router = express.Router();

let servicesController = require('../controllers/services');

/* GET home page. */

router.get('/', servicesController.services);

module.exports = router;