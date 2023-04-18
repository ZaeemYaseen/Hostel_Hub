// Admin Pages
exports.login = function(req, res){
    res.send("Login Page")
};

exports.adminhome = function(req, res){
    res.send("Admin Home Page")
};

exports.about = function(req, res){
    res.send("About Page")
};

exports.viewUser = function(req, res){
    res.send("View User Page")
};

//User Pages

exports.userhome = function(req, res){
    res.send("User Home Page")
};

exports.usersignup = function(req, res){
    res.send("User Sign Up Page")
};

exports.usereditprofile = function(req, res){
    res.send("User Edit Profile Page")
}


