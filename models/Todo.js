const { Schema, model } = require("../server/node_modules/mongoose");

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Todo = model("todo", TodoSchema);

module.exports = Todo;
