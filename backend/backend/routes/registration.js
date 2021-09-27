var express = require("express");
var router = express.Router();
var ReController = require("../controllers/registration");

router.get("/", ReController.showRegistrations);
router.get("/:id", ReController.showRegistration);
router.post("/", ReController.createRegistration);
router.delete("/:id", ReController.deleteRegistration);
router.put("/:id", ReController.updateRegistration);

module.exports = router;
