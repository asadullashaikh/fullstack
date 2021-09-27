var express = require("express");
var router = express.Router();
var userController = require("../controllers/user");

router.get("/read", userController.showHobbies);
router.post("/insert", userController.createHobby);
router.put("/update/:id", userController.updateHobby);
router.delete("/delete/:id", userController.deleteHobby);

module.exports = router;