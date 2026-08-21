const express = require("express");

const app = express();

app.get("/students/:id", (req, res) => {
  const id = req.params.id;

  if (id === "1") {
    res.send("Student: An");
  } else if (id === "2") {
    res.send("Student: Binh");
  } else {
    res.status(404).send("Student not found");
  }
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});