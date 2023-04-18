const sequelize = require("../config/db.config")
const { Sequelize, DataTypes } = require("sequelize");

    const review = sequelize.define("review", {
      name: {
        type: Sequelize.STRING,
      },
      rollno: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      }
    });
    
    module.exports=(review);
  
