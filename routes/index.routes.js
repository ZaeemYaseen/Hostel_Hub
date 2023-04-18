const express = require('express')

const Router=express.Router();
const {login, adminhome ,about,viewUser,approveitems,adminviewlost,adminhistory,adminfeedback, usersignup,submitlost,submitfound,userhome,usereditprofile,userfeedback,userhistory, NotFound} = require("../controllers/index.controller");



//Admin URLs
Router.get('/login', (req, res) => {

  login(req,res)

})

Router.get('/admin/home', (req, res) => {

  admin(req,res)

})

Router.get('/aboutus', (req, res) => {

  about(req,res)

})

//User URLs

Router.get('/signup', (req, res) => {

  usersignup(req,res)

})

Router.get('/user/home', (req, res) => {

  userhome(req,res)

})

module.exports=Router;