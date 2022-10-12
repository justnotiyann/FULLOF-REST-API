const User = require("../models/Users");
const argon2 = require("argon2");
const Users = require("../models/Users");

const verifiedEmail = async (req, res, next) => {
  const result = await Users.findAll({ where: { email: req.body.email } });
  if (!result) {
    res.status(404).json({ msg: "Email tidak ditemukan" });
  } else {
    next();
  }
};

const login = async (req, res) => {
  const hash = await argon2.verify(req.body.password);
  if (!hash) {
    res.status(400).json({ msg: "Password salah" });
  } else {
    res.status(200).json({ msg: "Anda Login selamat datang" });
  }
};
