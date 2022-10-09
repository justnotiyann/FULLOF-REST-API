const router = require("express").Router();
const { ConnectionRefusedError } = require("sequelize");
const controllers = require("../controllers/Users");

router.get("/", (req, res) => {
  res.send("oke");
});
router.post("/add", controllers.addUser);
router.get("/get", controllers.getUsers);
router.post("/edit/:id", controllers.updateUUser);

module.exports = router;
