const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const mongoUri = process.env.MONGO_URI;
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const path = require("path");
const TodoListRoutes = require("../routes/api/TodoList");

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB database connected..."))
  .catch((err) => console.log(err));

app.use("/api/todoList", TodoListRoutes);

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("TEST");
});
