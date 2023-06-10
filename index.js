var con = require('./db.config')
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

var stdname;
var stdpassword;

app.get ('/start',function(req,res){
    res.render('start')
})
//admin login--------------------------------------------------------------------------------------------
app.get('/adminlogin',function(req,res){
    res.render('adminlogin')
})

app.post('/adminlogin', function(req,res){
    var name = req.body.username;
    var password = req.body.password;

    var sql = "SELECT * FROM adminlogin WHERE username = ? && password = ? ";
    con.query(sql,[name, password],function(error){
        if(error) throw error;
        res.render('adminmenu');            
    });
})

//admin menu--------------------------------------------------------------------------------------------------
app.get('/adminmenu',function(req,res){
    res.render('adminmenu')
})


//Allot rooms--------------------------------------------------------------------------------------------------
app.get('/allotrooms',function(req,res){
    var sql = "SELECT * FROM stdreg where room is null";

    con.query(sql, function(error,result){
        if(error) console.log(error);
        res.render(__dirname + '/views/allotrooms',{students:result});
    });
})

app.post('/allotrooms', function(req,res){
    var rollno = req.body.rollno;
    var room = req.body.room;

    var sql = "UPDATE stdreg set room = ? WHERE rollno = ?";
    con.query(sql,[room, rollno],function(error){
        if(error) throw error;

        var sql = "SELECT * FROM stdreg where room is not null";
        con.query(sql, function(error,result){
            if(error) console.log(error);
            res.render(__dirname + '/views/allottedrooms',{students:result});
        });
    });
})


//Allotted rooms--------------------------------------------------------------------------------------------------
app.get('/allottedrooms',function(req,res){
    var sql = "SELECT * FROM stdreg where room is not null";

    con.query(sql, function(error,result){
        if(error) console.log(error);
        res.render(__dirname + '/views/allottedrooms',{students:result});
    });
})


//admin mess list--------------------------------------------------------------------------------------------------
app.get('/messlist',function(req,res){
    var sql = "SELECT * FROM mess";

    con.query(sql, function(error,result){
        if(error) console.log(error);
        res.render(__dirname + '/views/messlist',{students:result});
    });
});


//admin gym list--------------------------------------------------------------------------------------------------
app.get('/gymlist',function(req,res){

    var sql = "SELECT * FROM gym";

    con.query(sql, function(error,result){
        if(error) console.log(error);
        res.render(__dirname + '/views/gymlist',{students:result});
    });
});


//admin contact us--------------------------------------------------------------------------------------------------
app.get('/ContactUs',function(req,res){
    res.render('ContactUs')
})

app.post("/ContactUs", function (req, res) {
    var email = req.body.email;
    var message = req.body.message;
    const nodemailer = require("nodemailer");
    let testAccount = nodemailer.createTestAccount();
   
     // connect with the smtp
     const transporter = nodemailer.createTransport({
       host: 'smtp.ethereal.email',
       port: 587,
       auth: {
           user: 'francis59@ethereal.email',
           pass: 'p7r2VZV3BxG83berut'
       }
   });
   
     let info = transporter.sendMail({
       from: email, // sender address
       to: "francis59@ethereal.email", // list of receivers
       subject: "Test mail", // Subject line
       text: message, // plain text body
       html: "<h1 style='color:red;'>Mail through node mailer</h1>", // html body
     });
   
     var sql = "SELECT * FROM stdreg WHERE username = ? && password = ? ";
        con.query(sql,[stdname, stdpassword],function(error, result){
            if(error) throw error;
            res.render(__dirname + '/views/stdmenu',{students:result});
        });
   });




//admin about us--------------------------------------------------------------------------------------------------
app.get('/AboutUs',function(req,res){
    res.render('AboutUs')
})



//********************************************************************************************************************
//********************************************************************************************************************

//student menu
app.get('/stdmenu',function(req,res){
    res.render('stdmenu');
})

//student registration-----------------------------------------------------------------------------------------
app.get('/stdreg',function(req,res){
    res.render('stdreg');
})

app.post('/stdreg', function(req,res){
    var rollno = req.body.rollno;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    con.connect(function(error){
        if(error) throw error;

        var sql = "INSERT INTO stdreg(username, email, password, rollno) VALUES(?, ?, ?, ?)";
        con.query(sql,[name, email, password, rollno],function(error){
            if(error) throw error;
            res.render("stdlogin");
        });
    });
})


//student login--------------------------------------------------------------------------------------------------
app.get('/stdlogin',function(req,res){
    res.render('stdlogin');
})

app.post('/stdlogin', function(req,res){
    var name = req.body.username;
    var password = req.body.password;

    stdname = name;
    stdpassword = password;

    var sql = "SELECT * FROM stdreg WHERE username = ? && password = ? ";
    con.query(sql,[name, password],function(error, result){
        if(error) throw error;
        res.render(__dirname + '/views/stdmenu',{students:result});
    });
})


//student Mess from--------------------------------------------------------------------------------------------------
app.get('/stdmess',function(req,res){
    res.render('stdmess');
})

app.post('/stdmess', function(req,res){
    var rollno = req.body.rollno;
    var breakfast = req.body.breakfast;
    var lunch = req.body.lunch;
    var dinner = req.body.dinner;
    var date = req.body.date;

    var sql = "INSERT INTO mess (rollno, breakfast, lunch, dinner, date) VALUES(?, ?, ?, ?, ?)";
        con.query(sql,[rollno, breakfast, lunch, dinner, date],function(error){
            if(error) throw error;
            var sql = "SELECT * FROM stdreg WHERE username = ? && password = ? ";
        con.query(sql,[stdname, stdpassword],function(error, result){
            if(error) throw error;
            res.render(__dirname + '/views/stdmenu',{students:result});
        });

    });
})


//student GYM from--------------------------------------------------------------------------------------------------
app.get('/stdgym',function(req,res){
    res.render('stdgym');
})

app.post('/stdgym', function(req,res){
    var name = req.body.name;
    var rollno = req.body.rollno;
    var type = req.body.subscription;

    if (type=="monthly"){
        subscription = 1;
    }
    else{
        subscription = 5
    }

    var sql = "INSERT INTO gym (name, rollno, sub_month) VALUES(?, ?, ?)";
    con.query(sql,[name, rollno, subscription],function(error){
        if(error) throw error;

        var sql = "SELECT * FROM stdreg WHERE username = ? && password = ? ";
        con.query(sql,[stdname, stdpassword],function(error, result){
            if(error) throw error;
            res.render(__dirname + '/views/stdmenu',{students:result});
        });
    });
})

app.listen(8080);