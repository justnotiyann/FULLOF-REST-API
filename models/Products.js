const { DataTypes } = require("sequelize");
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

Products.sync({});
module.exports = { Products };
