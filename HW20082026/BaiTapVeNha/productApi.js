const express = require("express");

const app = express();

app.use(express.json());

let products = [
  {
    id: 1,
    name: "Laptop",
    price: 20000000
  },
  {
    id: 2,
    name: "Mouse",
    price: 500000
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1000000
  }
];

app.get("/products", (req, res) => {
  res.json(products);
});


app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find(product => product.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.json(product);
});


app.post("/products", (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});


app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find(product => product.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const { name, price } = req.body;

  product.name = name;
  product.price = price;

  res.json(product);
});

app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const productIndex = products.findIndex(
    product => product.id === id
  );

  if (productIndex === -1) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const deletedProduct = products.splice(productIndex, 1);

  res.json({
    message: "Product deleted",
    product: deletedProduct[0]
  });
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});