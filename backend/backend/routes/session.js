var express = require("express");
var router = express.Router();

router.get("/setsession", function (req, res, next) {
	req.session.name = "Zenrays.com";
	req.session.location = "Bangalore";
	res.send("session set");
});
router.get("/getsession", function (req, res, next) {
	res.json({ name: req.session.name, location: req.session.location });
});

//equivalent to logout in session terminology
router.get("/clear", function (req, res, next) {
	req.session.destroy(function (err) {
		console.log(err);
		if (err) {
			res.send("unable to destroy session");
		}
		res.send("SEssion destroyed");
	});
});
router.get("/clearlocation", function (req, res, next) {
	delete req.session.location;
	res.send("location value in session is removed");
});
module.exports = router;
