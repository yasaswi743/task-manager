const express = require("express");
const router = express.Router();

let tasks = [];


// GET tasks
router.get("/", (req, res) => {
  res.json(tasks);
});


// ADD task
router.post("/", (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title,
    completed: false,
    priority: req.body.priority,
    dueDate: req.body.dueDate,
  };

  tasks.push(task);

  res.json(task);
});


// DELETE task
router.delete("/:id", (req, res) => {
  tasks = tasks.filter(task => task.id != req.params.id);

  res.json({ message: "Deleted" });
});


// TOGGLE COMPLETE
router.put("/:id", (req, res) => {
  tasks = tasks.map(task => {
    if (task.id == req.params.id) {
      return {
        ...task,
        completed: !task.completed,
      };
    }

    return task;
  });

  res.json({ message: "Updated" });
});

module.exports = router;