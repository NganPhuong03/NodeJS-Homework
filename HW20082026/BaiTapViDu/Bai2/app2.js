const express = require("express");

const app = express();

app.get("/sum", (req, res) => {
  if (req.query.a === undefined || req.query.b === undefined) {
    res.send("Please provide a and b");
    return;
  }

  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.send(`${a} + ${b} = ${a + b}`);
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});