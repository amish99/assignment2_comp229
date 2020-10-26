//Assignment 2
//Student: amish tangri 30110446
//Course: Web Application Development SEC.001  COMP229004-2020F
//Date: October 24, 2020 -->

let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);