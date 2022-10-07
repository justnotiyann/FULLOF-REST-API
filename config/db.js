const { Sequelize } = require("sequelize");
require("dotenv").config();

// console.log();

const db = new Sequelize(process.env.DATABASE, process.env.USER_NAME, process.env.PASS, {
  host: process.env.HOST,
  dialect: process.env.DIALECT /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

db.authenticate();
module.exports = db;
