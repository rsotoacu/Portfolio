// File: about.js
// Author: Rodrigo Soto
// Student number: 301295478
// Date: 01-10-2023

var express = require('express');
var router = express.Router();

let aboutController = require('../controllers/about');

/* GET home page. */

router.get('/', aboutController.about);

module.exports = router;