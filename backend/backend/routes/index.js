var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
//to resolve such conflict we keep the static route(which doesnt have parameter in the beginning
//and dynamic parameter in the end.
//route conflic happens when express considers 2 urls the same

//route conflic happens when express considers 2 urls the same
router.get("/contact", function (req, res, next) {
  res.send("welcome to contact us page");
});

router.get("/testform", function (req, res, next) {
  res.send(`
    <form method = "post" action = "/result">
      <input type="text" name = "name"/>
      <button>Register</button>
    </form>

    `);
});
router.get("/result", function (req, res) {
  console.log(req.body);
  res.send(req.body.name);
});
module.exports = router;
