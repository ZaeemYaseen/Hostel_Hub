const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
   'hms',
   'root',
   '123',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});


module.exports = sequelize