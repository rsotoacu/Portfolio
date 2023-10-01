var express = require('express');
var router = express.Router();

let aboutController = require('../controllers/about');

/* GET home page. */

router.get('/', aboutController.about);

module.exports = router;