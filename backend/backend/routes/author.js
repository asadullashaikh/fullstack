var express = require("express");
var router = express.Router();
var authorController = require("../controllers/author");
var CategoryController = require("../controllers/category");
router.get("/", authorController.showAuthors);
router.get("/:id", authorController.showAuthor);
router.post("/", authorController.createAuthor);
router.post("/category", CategoryController.createCategory);
router.get("/category/:name", CategoryController.findByName);

/*router.delete("/:id", authorController.deleteHobby);
router.put("/:id", authorController.updateHobby);*/

module.exports = router;
