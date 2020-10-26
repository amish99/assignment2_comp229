//Assignment 2
//Student: amish tangri 30110446
//Course: Web Application Development SEC.001  COMP229004-2020F
//Date: October 24, 2020 -->

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
