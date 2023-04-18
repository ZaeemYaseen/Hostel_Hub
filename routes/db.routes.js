const express = require('express')
const router = express.Router()
const checkDup = require("../middlewares/error.js") 
//Autharization
const {isAdmin} = require("../middlewares/auth.middle")


const Table = require("../controllers/db.controller");

// Create a new Table And Add Data
router.post("/add-admin", Table.addInAdminTable);
router.post("/add-user", Table.addInUserTable);
router.post("/add-complain", Table.addinComplainTable);
router.post("/add-feedback", Table.addinFeedbackTable);


//Updating Data
//Adding Authorization
router.put("/update-admin", isAdmin, Table.updateAdminPass);
router.put("/update-user", Table.UpdateUser);
router.put("/update-complain", Table.UpdateComplain);
router.put("/update-feedback", Table.updateFeedback);

//Retreiveing Data
router.get("/search-admin", Table.GetAdmin);
router.get("/search-user", Table.GetUser);
router.get("/search-complain", Table.GetComplain);
router.get("/search-feedback", Table.GetFeedback);

//Deleting Data
router.delete("/del-admin", Table.DeleteAdmin);
router.delete("/del-user", Table.DeleteUser);
router.delete("/del-complain", Table.DeleteComplain);
router.delete("/del-feedback", Table.DeleteFeedback);

module.exports = router;
