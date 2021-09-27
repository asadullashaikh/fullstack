var express = require("express");
var router = express.Router();
var TodoController = require("../controllers/todo");

router.get("/", TodoController.showTodos);
router.get("/:id", TodoController.showTodo);
router.post("/", TodoController.createTodo);
router.delete("/:id", TodoController.deleteTodo);
router.put("/:id", TodoController.updateTodo);

module.exports = router;
