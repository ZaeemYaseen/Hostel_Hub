const express = require("express");
const router = express.Router();

const {Home,AboutUs,ContactUs,LogIn,forgetpassword} = require("../controllers/index.controllers");

const {getSignUp,getRoomAllotment,getMessAttendance,getGatepass} = require("../controllers/index.controllers");

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

//--------HAMZA SAJJAD PART--------------//
router.get("/signup", (req,res) =>
  {
    getSignUp(req,res);
  }
)

router.get("/Room", (req,res) =>
  {
    getRoomAllotment(req,res);
  }
)

router.get("/Mess", (req,res) =>
  {
    getMessAttendance(req,res);
  }
)

router.get("/GatePass", (req,res) =>
  {
    getGatepass (req,res);
  }
)
module.exports = router;
