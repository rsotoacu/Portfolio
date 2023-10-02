// File: index.js
// Author: Rodrigo Soto
// Student number: 301295478
// Date: 01-10-2023

var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);

module.exports = router;
