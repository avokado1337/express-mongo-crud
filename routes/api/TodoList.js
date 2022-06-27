const { Router } = require("../../server/node_modules/express");
const Todo = require("../../models/Todo");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const todoList = await Todo.find();
    if (!todoList) throw new Error("No ToDo element was found");
    res.status(200).json(todoList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    const todo = await newTodo.save();
    if (!todo) throw new Error("Something went wrong saving the Todo element");
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.edit("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const editedTodo = await Todo.findByIdAndUpdate(id);
    if (!editedTodo)
      throw Error("Something went wrong editing the Todo element");
    res.status(200).json(removedTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removedTodo = await Todo.findByIdAndDelete(id);
    if (!removedTodo)
      throw Error("Something went wrong deleting the Todo element");
    res.status(200).json(removedTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
