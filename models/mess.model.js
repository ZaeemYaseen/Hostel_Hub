const sequelize = require("../config/db.config")
const { Sequelize, DataTypes } = require("sequelize");

    const mess = sequelize.define("mess", {
      name: {
        type: Sequelize.STRING,
      },
      rollno: {
        type: Sequelize.STRING,
      },
    });
    
    module.exports=(mess);
  
