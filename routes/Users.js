const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("oke");
});

module.exports = router;
