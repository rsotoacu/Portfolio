// File: projects.js
// Author: Rodrigo Soto
// Student number: 301295478
// Date: 01-10-2023

var express = require('express');
var router = express.Router();

let projectsController = require('../controllers/projects');

/* GET home page. */

router.get('/', projectsController.projects);

module.exports = router;