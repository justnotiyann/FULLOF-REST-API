const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const Products = db.define(
  "products",
  {
    nama_product: DataTypes.STRING,
    jenis_product: DataTypes.STRING,
    jenis_barang: DataTypes.STRING,
    tanggal_input: DataTypes.STRING,
    asal_negara: DataTypes.STRING,
  },
  { freezeTableName: true, timestamps: false }
);
// const jenis_barang = db.define(
//   "jenis_barang",
//   {
//     keyboard: DataTypes.STRING,
//     monitor: DataTypes.STRING,
//     mousepad: DataTypes.STRING,
//     komputer: DataTypes.STRING,
//   },
//   { freezeTableName: true, timestamps: false }
// );
Products.sync({});
// jenis_barang.sync({});

// Products.hasOne(jenis_barang, {
//   foreignKey: "id",
// });
// jenis_barang.belongsTo(Products);

module.exports = { Products };
