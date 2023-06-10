var mysql = require("mysql")

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123",
    database:"hms"
});

module.exports = con;