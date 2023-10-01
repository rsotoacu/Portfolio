var express = require('express');
var router = express.Router();

let projectsController = require('../controllers/projects');

/* GET home page. */

router.get('/', projectsController.projects);

module.exports = router;