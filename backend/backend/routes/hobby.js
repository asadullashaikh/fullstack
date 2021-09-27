var express = require("express");
var router = express.Router();
var hobbyController = require("../controllers/hobby");

router.get("/", hobbyController.showHobbies);
router.get("/:id", hobbyController.showHobby);
router.post("/", hobbyController.createHobby);
router.delete("/:id", hobbyController.deleteHobby);
router.put("/:id", hobbyController.updateHobby);

module.exports = router;
