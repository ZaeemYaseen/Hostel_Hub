const sequelize = require("../config/db.config")
const { Sequelize, DataTypes } = require("sequelize");

    const gym = sequelize.define("gym", {
      name: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      gymId: {
        type: Sequelize.STRING,
      },
    });
    
    module.exports=(gym);
  
