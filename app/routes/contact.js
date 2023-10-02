// File: contact.js
// Author: Rodrigo Soto
// Student number: 301295478
// Date: 01-10-2023


var express = require('express');
var router = express.Router();

let contactController = require('../controllers/contact');

/* GET home page. */

router.get('/', contactController.contact);

module.exports = router;