var express = require("express");
var router = express.Router();
var bookController = require("../controllers/book");

router.post("/", bookController.createBook);
router.get("/", bookController.getBooks);
router.get("/details/", bookController.getBookDetailsAuthor);
router.get("/alldetails/", bookController.getBookDetailsAll);
router.get("/getsession", function (req, res, next) {
	res.json({ name: req.session.name, location: req.session.location });
});
module.exports = router;
