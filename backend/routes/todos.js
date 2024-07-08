const express = require("express");
const {
  getTodos,
  createTodo,
  getTodoById,
  updateTodoItem,
  deleteTodoItem,
} = require("../controllers/todos");

const router = express.Router();
router.get("/", getTodos);
router.post("/", createTodo);
router.get("/:id", getTodoById);
router.put("/:id", updateTodoItem);
router.delete("/:id", deleteTodoItem);

module.exports = router;