var express = require('express');
var router = express.Router();
var templates = require("./api/template.route");

router.use('/templates', templates);

module.exports = router;