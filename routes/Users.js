const router = require("express").Router();
const controllers = require("../controllers/Users");

router.get("/", (req, res) => {
  res.send("oke");
});
router.post("/add", controllers.addUser);
router.get("/get", controllers.getUsers);
router.post("/edit/:id", controllers.updateUUser);
router.get("/delete/:id", controllers.deleteUser);

module.exports = router;
