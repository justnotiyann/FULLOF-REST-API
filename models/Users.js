const DataTypes = require("sequelize");
const db = require("../config/db");

const Users = db.define(
  "users",
  {
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Users.sync({});
module.exports = Users;
