const { Router } = require("express");
const pool = require("../db");

const {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/task.controller");

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.delete("/tasks", deleteTask);

router.put("/tasks", updateTask);

module.exports = router;