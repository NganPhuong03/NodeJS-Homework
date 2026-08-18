const express = require("express");
const app = express();

app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 20000000 },
  { id: 2, name: "Mouse", price: 500000 }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
  }

  res.json(product);
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || price === undefined) {
    return res.status(400).json({ message: "Vui lòng nhập name và price" });
  }

  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    name,
    price: Number(price)
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
  }

  const { name, price } = req.body;
  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = Number(price);

  res.json(product);
});

app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
  }

  const deletedProduct = products.splice(index, 1);
  res.json({ message: "Đã xóa sản phẩm thành công", product: deletedProduct[0] });
});

app.listen(3000, () => {
  console.log("Server Bài 4 đang chạy tại http://localhost:3000");
});