//Assignment 2
//Student: amish tangri 30110446
//Course: Web Application Development SEC.001  COMP229004-2020F
//Date: October 24, 2020 -->


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//create User Model instance
let userModel = require('../models/user');
let User = userModel.User; //alias

module.exports.displayHomePage = (req,res,next) => {
    res.render('index',{title:"Home", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayAboutPage = (req,res,next) => {
    res.render('about',{title:"About Me", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayProjectsPage = (req,res,next) => {
    res.render('projects',{title:"Projects", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayServicesPage = (req,res,next) => {
    res.render('services',{title:"Services", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayContactPage = (req,res,next) => {
    res.render('contact',{title:"Contact Me", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayLoginPage = (req,res,next) => {
    //check if the user is already logged in
    //first line checks if not logged in
    if(!req.user)
    {
        res.render('auth/login',
        {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.use.displayName : ''
        })
    }
    else
    {
        return res.redirect('/');
    }
   
}

module.exports.processLoginPage = (req,res, next) => {
    passport.authenticate('local',
    (err,user,info) => {
        //server error
        if(err)
        {
            return next(err);
        }
        //is there a user login error?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user,(err) => {
            //server error?
            if(err)
            {
                return next(err);
            }
            return res.redirect('/contact-list');
        });
    })(req,res,next);
}





module.exports.performLogout = (req,res,next) => {
    req.logout();
    res.redirect('/');
}













