const express = require("express");
const app = express();

app.use(express.json());

let todos = [
  { id: 1, title: "Học Node.js", completed: false },
  { id: 2, title: "Làm bài tập", completed: true }
];

app.get("/", (req, res) => {
  res.send("<h1>Server Bài 5 đang chạy! Hãy truy cập /todos để xem dữ liệu.</h1>");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Không tìm thấy công việc" });
  }

  res.json(todo);
});

app.post("/todos", (req, res) => {
  const { title, completed } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Vui lòng nhập tiêu đề (title)" });
  }

  const newTodo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    title,
    completed: completed !== undefined ? Boolean(completed) : false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Không tìm thấy công việc" });
  }

  const { title, completed } = req.body;
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = Boolean(completed);

  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Không tìm thấy công việc" });
  }

  const deletedTodo = todos.splice(index, 1);
  res.json({ message: "Đã xóa công việc thành công", todo: deletedTodo[0] });
});

app.listen(3000, () => {
  console.log("Server Bài 5 đang chạy tại http://localhost:3000");
});