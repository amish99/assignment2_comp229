//Assignment 2
//Student: amish tangri 30110446
//Course: Web Application Development SEC.001  COMP229004-2020F
//Date: October 24, 2020 -->



var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);


/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact me page. */
router.get('/contact', indexController.displayContactPage);


/* GET Route for displaying the Login page*/
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page*/
router.post('/login', indexController.processLoginPage);



/* GET Route to perform UserLogout */
router.get('/logout', indexController.performLogout);




module.exports = router;
