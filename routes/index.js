const router = require("express").Router();
const controllers = require("../controllers/Product");

router.get("/", (req, res) => {
  res.json("hai");
});

router.get("/detail", controllers.getProducts);

router.post("/add", controllers.addProduct);

router.delete("/delete/:id", controllers.deleteProduct);

router.post("/edit/:id", controllers.editProduct);

module.exports = router;
