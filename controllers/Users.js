const Users = require("../models/Users");
const argon2 = require("argon2");

const getUsers = async (req, res) => {
  try {
    const result = await Users.findAll({
      attributes: ["id","nama", "email", "image"],
    });
    if (result <= 0) res.json({ msg: "Data belum ada" });
    res.status(200).json({ msg: "Berikut data Users", result });
  } catch (e) {
    console.log(e);
  }
};

const addUser = async (req, res) => {
  try {
    const hash = await argon2.hash(req.body.password);
    const result = await Users.create({ ...req.body, password: hash, image: req.file.path });
    if (!result) res.json({ msg: "Gagal membuat data" });
    res.status(200).json({ msg: "berhasil membuat data" });
  } catch (e) {
    console.log(e);
  }
};

const updateUUser = async (req, res) => {
  try {
    const id = req.params.id;
    const search = await Users.findOne({ where: { id: id } });
    if (!search) {
      res.status(404).json({ msg: "Data user tidak ditemukan" });
    } else {
      const result = await Users.update(
        { ...req.body },
        {
          where: { id: id },
        }
      );
      if (!result) res.status(500).json({ msg: "Gagal membuat data" });
      res.status(200).json({ msg: `Berhasil update data dengan nama ${search.nama} menjadi ${result.nama}` });
    }
  } catch (e) {
    console.log(e);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const search = await Users.findOne({ where: { id: id } });
    if (!search) {
      res.status(404).json({ msg: "Data tidak ditemukan" });
    } else {
      await Users.destroy({ where: { id: id } });
      res.status(200).json({ msg: "Data berhasil dihapus" });
    }
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { getUsers, addUser, updateUUser, deleteUser };
