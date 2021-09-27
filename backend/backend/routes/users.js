var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/contact", function (req, res, next) {
  //next is a function that we use if we want to pass the control and no do anything. sometimes we use it
  //either to pass the control or to pass error
  res.send("welcome to contact us page");
});

router.get("/info", function (req, res, next) {
  res.send("loaded info route");
});


module.exports = router;
