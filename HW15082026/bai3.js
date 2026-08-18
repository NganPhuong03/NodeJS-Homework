const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Nguyen Van A", age: 20 },
  { id: 2, name: "Tran Van B", age: 22 }
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "Không tìm thấy User" });
  }

  res.json(user);
});

app.post("/users", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: "Vui lòng nhập name và age" });
  }

  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name,
    age
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "Không tìm thấy User" });
  }

  const { name, age } = req.body;
  if (name) user.name = name;
  if (age) user.age = age;

  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Không tìm thấy User" });
  }

  const deletedUser = users.splice(index, 1);
  res.json({ message: "Đã xóa thành công", user: deletedUser[0] });
});

app.listen(3000, () => {
  console.log("Server Bài 3 đang chạy tại http://localhost:3000");
});