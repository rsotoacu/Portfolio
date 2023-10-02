// File: users.js
// Author: Rodrigo Soto
// Student number: 301295478
// Date: 01-10-2023

var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');

/* GET users listing. */
router.get('/', usersController.users);

router.get('/profile', usersController.profile);

module.exports = router;
