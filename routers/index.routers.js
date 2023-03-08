const express = require("express");
const router = express.Router();

const {Home,AboutUs,ContactUs,LogIn,forgetpassword, getgym, getbusticket, getroomchangereq} = require("../controllers/index.controllers");

const {getSignUp,getRoomAllotment,getMessAttendance,getGatepass} = require("../controllers/index.controllers");

const {getgym,getbusticket,getroomchangereq} = require("../controllers/index.controllers");

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
//--------Umar Kamran PART--------------//
router.get("/GYM", (req,res) =>
  {
    getgym(req,res);
  }
)

router.get("/BUS", (req,res) =>
  {
    getbusticket(req,res);
  }
)

router.get("/Room Change", (req,res) =>
  {
    getroomchangereq(req,res);
  }
)

module.exports = router;
