// File: services.js
// Author: Rodrigo Soto
// Student number: 301295478
// Date: 01-10-2023

var express = require('express');
var router = express.Router();

let servicesController = require('../controllers/services');

/* GET home page. */

router.get('/', servicesController.services);

module.exports = router;