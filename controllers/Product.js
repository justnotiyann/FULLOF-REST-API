const Products = require("../models/Products");

const getProducts = async (req, res) => {
  try {
    const result = await Products.findAll({});
    if (result <= 0) res.json({ msg: "Data belum tersedia" });
    res.json({ msg: "Berikut datanya", result });
  } catch (error) {
    console.log(error.message);
  }
};

const addProduct = async (req, res) => {
  try {
    const body = req.body;
    const result = await Products.create({ ...body });
    res.json({ msg: "Data Berhasil ditambahkan" });
  } catch (e) {
    console.log(e.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Products.destroy({ where: { id: id } });
    if (result <= 0) res.status(404).json({ msg: "data tidak ditemukan" });
    res.status(200).json({ msg: "Data berhasil dihapus" });
  } catch (e) {
    console.log(e.message);
  }
};

// const editProduct = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const getProduct = await Products.findOne({ where: { id: id } });
//     if (getProduct <= 0) {
//       res.status(404).json({ msg: "Data tidak ditemukan" });
//     } else {
//       await Products.update({ ...req.body, where: { id: id } });
//       res.status(200).json({ msg: "Data berhasil diupdate" });
//     }
//   } catch (e) {
//     console.log(e.message);
//   }
// };

const editProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await Products.update({ ...body, where: { id: id } });
    if (!result) req.json({ msg: "gagal tambah data" });
    res.status(200).json({ msg: "Data berhasil diupdate" });
  } catch (e) {
    console.log(e.message);
  }
};
module.exports = { getProducts, addProduct, deleteProduct, editProduct };
