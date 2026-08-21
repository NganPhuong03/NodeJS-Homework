const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/feedback", (req, res) => {
  res.send(`
    <h1>Feedback</h1>

    <form action="/feedback" method="post">
      <input name="name" placeholder="Name">
      <br><br>

      <textarea name="message" placeholder="Message"></textarea>
      <br><br>

      <button type="submit">Send</button>
    </form>
  `);
});

app.post("/feedback", (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    res.send("Please fill all fields");
    return;
  }

  res.send(`
    <h1>Thank you, ${name}</h1>
    <p>Your message: ${message}</p>
  `);
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});