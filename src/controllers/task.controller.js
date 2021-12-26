const getAllTasks = async (req, res) => {
  res.send("retrieving all tasks");
};

const getTask = (req, res) => {
  res.send("Retrieving a single task");
};

const createTask = (req, res) => {
  res.send("Creating a task");
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