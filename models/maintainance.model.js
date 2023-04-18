const sequelize = require("../config/db.config")
const { Sequelize, DataTypes } = require("sequelize");

    const maintainance = sequelize.define("maintainance", {
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
    });
    
    module.exports=(maintainance);
  
