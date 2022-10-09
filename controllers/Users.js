const Users = require("../models/Users");

const getUsers = async (req, res) => {
  try {
    const result = await Users.findAll({});
    if (result <= 0) res.json({ msg: "Data belum ada" });
    res.json({ msg: "Berikut data Users", result });
  } catch (e) {
    console.log(e);
  }
};
