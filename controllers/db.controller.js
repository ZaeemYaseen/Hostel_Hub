
const sequelize = require("../config/db.config")
const express = require('express')
const app = express()
const Token = require("jsonwebtoken");
const errorHandler = require("../utils/errorHandler.js");
const {Op} = require("sequelize");

const Admin = require("../models/admin.model")
const User = require("../models/user.model")
const Complain = require("../models/complain.model")
const Feedback = require("../models/feedback.model")
const gym = require("../models/gym.model")
const mess = require("../models/mess.model")
const review = require("../models/review.model")


const Address = require("ipaddr.js")



////---------------------ADD----------------
const addInAdminTable = async function(req, res) {
    try {
      await sequelize.sync();
      console.log("Admin table created successfully!");
  
      const admin = await Admin.create({
        username: req.body.id,
        password: req.body.pass
      });
      console.log(admin);
      res.send(admin);
    } catch (error) {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
  };


  const addInUserTable = async function(req, res) {
    try {
      await sequelize.sync();
      console.log("Users table created successfully!");
  
      const user = await User.create({
        username: req.body.name,
        password: req.body.pass,
        contact: req.body.number,
        email: req.body.mail,
        address: req.body.home,
        zipcode:req.body.code
      });
      console.log(user);
      res.send(user);
    } catch (error) {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
  };

  const addinComplainTable = async function(req, res) {
    try {
      await sequelize.sync();
      console.log("Complain table created successfully!");
  
      const complain = await Complain.create({
        complain_id: req.body.id,
        user_id: req.body.userid,
        description:req.body.desc,
      
      });
      console.log(complain);
      res.send(complain);
    } catch (error) {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
  };

  const addinFeedbackTable = async function(req, res) {
    try {
      await sequelize.sync();
      console.log("Complain table created successfully!");
  
      const feedback = await Feedback.create({
        f_id: req.body.id,
        user_id: req.body.userid,
        description:req.body.desc,
      
      });
      console.log(feedback);
      res.send(feedback);
    } catch (error) {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
  };

  //HAMZA ADD //
const addIngymTable = async function(req, res) {
  try {
    await sequelize.sync();
    console.log("Admin table created successfully!");

    const gym = await gym.create({
      //username: req.body.id,
      //password: req.body.pass
      name:req.body.nam,
      password: req.body.pass,
      gymId:req.body.gyid
    });
    console.log(gym);
    res.send(gym);
  } catch (error) {
    console.error("Failed to create a new record : ", error);
    res.status(500).send(error.message);
  }
};


const addInmessTable = async function(req, res) {
  try {
    await sequelize.sync();
    console.log("Admin table created successfully!");

    const mess = await mess.create({
      //username: req.body.id,
      //password: req.body.pass
      //name:req.body.nam,
      //gymId:req.body.gyid

      name: req.body.nam,
      rollno:req.body.roll
    });
    console.log(mess);
    res.send(mess);
  } catch (error) {
    console.error("Failed to create a new record : ", error);
    res.status(500).send(error.message);
  }
};

const addInreviewTable = async function(req, res) {
  try {
    await sequelize.sync();
    console.log("Admin table created successfully!");

    const mess = await mess.create({
      name: req.body.nam,
      rollno: req.body.r,
      type: req.body.typ
    });
    console.log(mess);
    res.send(mess);
  } catch (error) {
    console.error("Failed to create a new record : ", error);
    res.status(500).send(error.message);
  }
};

//////--------------------------Delete--------------------

const DeleteUser = (req, res) => {
    sequelize
      .sync()
      .then(() => {
        User.destroy({
          where: {
            username: req.body.id,
          },
        })
          .then((data) => {
            if (!data) {
              console.log("Data With This ID Not Found ");
              res.send(new error("Invalid ID" , 400))
            }
            else
            {
            console.log("Successfully deleted record.");
            res.send("Deleted");
            }
          })
          .catch((error) => {
            console.error("Failed to delete record : ", error);
            res.send("error");
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
        res.send("table error");
      });
  }; 

  const DeleteAdmin = (req, res) => {
    sequelize
      .sync()
      .then(() => {
        Admin.destroy({
          where: {
            username: req.body.id
          },
        })
          .then((data) => {
            console.log("data"+data)
            if (!data) {
              console.log("Data With This ID Not Found ");
              res.send(new error("Invalid ID" , 400))
            }
            else
            {
            console.log("Successfully deleted record.");
            res.send("Deleted");
            }
          })
          .catch((error) => {
            console.error("Failed to delete record : ", error);
            res.send("error");
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
        res.send("table error");
      });
  }; 

  const DeleteComplain = (req, res) => {
    sequelize
      .sync()
      .then(() => {
        Complain.destroy({
          where: {
            complain_id: req.body.r_id
          },
        })
          .then((data) => {
            if (!data) {
              console.log("Data With This ID Not Found ");
              res.send(new error("Invalid ID" , 400))
            }
            else
            {
            console.log("Successfully deleted record.");
            res.send("Deleted");
            }
          })
          .catch((error) => {
            console.error("Failed to delete record : ", error);
            res.send("error");
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
        res.send("table error");
      });
  };

  const DeleteFeedback  = (req, res) => {
    sequelize
      .sync()
      .then(() => {
        Feedback.destroy({
          where: {
            f_id: req.body.id
          },
        })
          .then((data) => {
            if (!data) {
              console.log("Data With This ID Not Found ");
              res.send(new error("Invalid ID" , 400))
            }
            else
            {
            console.log("Successfully deleted record.");
            res.send("Deleted");
            }
          })
          .catch((error) => {
            console.error("Failed to delete record : ", error);
            res.send("error");
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
        res.send("table error");
      });
  };

// HAMZA DELETE // 

const deletegym = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      gym.destroy({
        where: {
          name:req.body.nam
        },
      })
        .then((data) => {
          console.log("data"+data)
          if (!data) {
            console.log("Data With This ID Not Found ");
            res.send(new error("Invalid ID" , 400))
          }
          else
          {
          console.log("Successfully deleted record.");
          res.send("Deleted");
          }
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
}; 



const deletemess = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      mess.destroy({
        where: {
          rollno:req.body.roll
        },
      })
        .then((data) => {
          console.log("data"+data)
          if (!data) {
            console.log("Data With This ID Not Found ");
            res.send(new error("Invalid ID" , 400))
          }
          else
          {
          console.log("Successfully deleted record.");
          res.send("Deleted");
          }
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
}; 



const deletereview = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      review.destroy({
        where: {
          name: req.body.nam
        },
      })
        .then((data) => {
          console.log("data"+data)
          if (!data) {
            console.log("Data With This ID Not Found ");
            res.send(new error("Invalid ID" , 400))
          }
          else
          {
          console.log("Successfully deleted record.");
          res.send("Deleted");
          }
        })
        .catch((error) => {
          console.error("Failed to delete record : ", error);
          res.send("error");
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      res.send("table error");
    });
}; 

/////////----------------------UPDATE------------------

const updateAdminPass = async function(req, res) {
    try {
      await sequelize.sync();
  
      const admin = await Admin.update(
        {
            password: req.body.pass,
        },
        {
            where:{ username : req.body.id},
        });
      console.log(admin);
      res.send(admin);
    } catch (error) {
      console.error("Failed to Update Record : ", error);
      res.status(500).send(error.message);
    }
  };

const UpdateUser = async function(req, res) {
    try {
      await sequelize.sync();
  
      const user = await User.update(
        {
            password: req.body.pass,
        },
        {
            where:{ username : req.body.name},
        });
      console.log(user);
      res.send(user);
    } catch (error) {
      console.error("Failed to Update Record : ", error);
      res.status(500).send(error.message);
    }
  };

  const UpdateComplain = async function(req, res) {
    try {
      await sequelize.sync();
  
      const complain = await Complain.update(
        {
            description: req.body.desc,
        },
        {
            where:{ complain_id : req.body.id},
        });
      console.log(complain);
      res.send(complain);
    } catch (error) {
      console.error("Failed to Update Record : ", error);
      res.status(500).send(error.message);
    }
  };

  const updateFeedback = async function(req, res) {
    try {
      await sequelize.sync();
  
      const feedback = await Feedback.update(
        {
            description: req.body.desc,
        },
        {
            where:{ f_id : req.body.id},
        });
      console.log(feedback);
      res.send(feedback);
    } catch (error) {
      console.error("Failed to Update Record : ", error);
      res.status(500).send(error.message);
    }
  };

  // HAMZA UPDATE //
const updategym = async function(req, res) {
  try {
    await sequelize.sync();

    const gym = await gym.update(
      {
          password: req.body.pass,
      },
      {
          where:{name:req.body.nam},
      });
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error("Failed to Update Record : ", error);
    res.status(500).send(error.message);
  }
};

const updatemess = async function(req, res) {
  try {
    await sequelize.sync();

    const mess = await mess.update(
      {
          
      },
      {
          
      });
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error("Failed to Update Record : ", error);
    res.status(500).send(error.message);
  }
};



////-------------------Retrive------------------

const GetUser = async (req, res) => {
    try{
      await sequelize
      .sync()
      .then(async() => {
          await User.findOne({
          where: {
            username : req.body.name
          }
        })
          .then((data) => {
            if(!data)
            {
              res.send(new errorHandler("Cannot Find Data " , 404))
            }
            else{
            console.log("Data Found.");
            res.status(200).send(data);
            }
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
      });
    }catch{
      console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
    }
  };

  const GetAdmin = async (req, res) => {
        try{
          await sequelize
          .sync()
          .then(async() => {
              await Admin.findOne({
              where: {
                username : req.body.name
              }
            })
              .then((data) => {
                if(!data)
                {
                  res.send(new errorHandler("Cannot Find Data " , 404))
                }
                else{
                console.log("Data Found.");
                var token = Token.sign({username : req.body.name , Role : "admin"}, 'abcdef')
                //console.log(token)
                res.status(200).send(data,{ 
                    username: token.username,
                    roles: token.Role,
                    accessToken: token
                  });
                }
              })
              .catch((error) => {
                console.error("Failed to Get record : ", error);
          res.status(500).send(error.message);
              });
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
          res.status(500).send(error.message);
          });
        }catch{
          console.error("Failed to Get record : ", error);
          res.status(500).send(error.message);
        }
      };

      const GetComplain = async (req, res) => {
        try{
          await sequelize
          .sync()
          .then(async() => {
              await Complain.findOne({
              where: {
                complain_id : req.body.id
              }
            })
              .then((data) => {
                if(!data)
                {
                  res.send(new errorHandler("Cannot Find Data " , 404))
                }
                else{
                console.log("Data Found.");
                res.status(200).send(data);
                }
              })
              .catch((error) => {
                console.error("Failed to Get record : ", error);
          res.status(500).send(error.message);
              });
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
          res.status(500).send(error.message);
          });
        }catch{
          console.error("Failed to Get record : ", error);
          res.status(500).send(error.message);
        }
      };
    
    
    
      const GetFeedback = async (req, res) => {
        try{
          await sequelize
          .sync()
          .then(async() => {
              await Feedback.findOne({
              where: {
                f_id : req.body.id
              }
            })
              .then((data) => {
                if(!data)
                {
                  res.send(new errorHandler("Cannot Find Data " , 404))
                }
                else{
                console.log("Data Found.");
                res.status(200).send(data);
                }
              })
              .catch((error) => {
                console.error("Failed to Get record : ", error);
          res.status(500).send(error.message);
              });
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
          res.status(500).send(error.message);
          });
        }catch{
          console.error("Failed to Get record : ", error);
          res.status(500).send(error.message);
        }
      };
 
   // HAMZA RETRIVE GET 


  const getgym = async (req, res) => {
    try{
      await sequelize
      .sync()
      .then(async() => {
          await gym.findOne({
          where: {
            name:req.body.nam
          }
        })
          .then((data) => {
            if(!data)
            {
              res.send(new errorHandler("Cannot Find Data " , 404))
            }
            else{
            console.log("Data Found.");
            
            res.status(200).send(data);
            }
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
      });
    }catch{
      console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
    }
  };


  const getmess = async (req, res) => {
    try{
      await sequelize
      .sync()
      .then(async() => {
          await mess.findOne({
          where: {
            rollno:req.body.roll
          }
        })
          .then((data) => {
            if(!data)
            {
              res.send(new errorHandler("Cannot Find Data " , 404))
            }
            else{
              console.log("Data Found.");
            
              res.status(200).send(data);
            }
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
      });
    }catch{
      console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
    }
  };



  const getreview = async (req, res) => {
    try{
      await sequelize
      .sync()
      .then(async() => {
          await review.findOne({
          where: {
            name: req.body.nam
          }
        })
          .then((data) => {
            if(!data)
            {
              res.send(new errorHandler("Cannot Find Data " , 404))
            }
            else{
            console.log("Data Found.");
            
            res.status(200).send(data);
            }
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
      });
    }catch{
      console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
    }
  };

    
module.exports = {addInUserTable , addInAdminTable ,addinComplainTable,addinFeedbackTable,
DeleteAdmin, DeleteUser, DeleteComplain, DeleteFeedback,
updateAdminPass,UpdateUser, UpdateComplain, updateFeedback,
GetAdmin,GetUser, GetComplain, GetFeedback,
addIngymTable,addInmessTable,addInreviewTable,deletegym,deletemess,
deletereview,getgym,getmess,getreview,updategym, updatemess
}