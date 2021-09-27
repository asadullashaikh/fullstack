var express = require("express");
//this is used to create routes
var router = express.Router();
console.log("Ran orders file");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("welcome to orders page");
});
router.get("/contact", function (req, res, next) {
  //next is a function that we use if we want to pass the control and no do anything. sometimes we use it
  //either to pass the control or to pass error
  res.send("welcome to contact us page");
});

module.exports = router;
