const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  res.send(`
    <h1>Product List</h1>
  `);
});

app.get("/products/featured", (req, res) => {
  res.send(`
    <h1>Featured Product</h1>
  `);
});

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 }
  ]);
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});