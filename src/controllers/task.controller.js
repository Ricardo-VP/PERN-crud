const pool = require("../db");

const getAllTasks = async (req, res) => {
  res.send("retrieving all tasks");
};

const getTask = (req, res) => {
  res.send("Retrieving a single task");
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error.message);
    res.json({ error: error.message });
  }
};

const deleteTask = (req, res) => {
  res.send("Deleting a task");
};

const updateTask = (req, res) => {
  res.send("Updating a task");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
