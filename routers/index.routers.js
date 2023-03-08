const express = require("express");
const router = express.Router();

const {Home,AboutUs,ContactUs,LogIn,forgetpassword} = require("../controllers/index.controllers");

router.get("/home",(req,res) =>
{
  Home(req,res);
})

router.get("/aboutus",(req,res) =>
{
  AboutUs(req,res);
})

router.get("/contactus",(req,res) =>
{
  ContactUs(req,res);
})

router.get("/login",(req,res) =>
{
  LogIn(req,res);
})

router.get("/login/forgetpassword",(req,res) =>
{
  forgetpassword(req,res);
})
module.exports = router;
