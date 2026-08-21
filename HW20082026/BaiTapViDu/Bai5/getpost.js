const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/search-form", (req, res) => {
  res.send(`
    <h1>Search Form</h1>

    <form action="/search-result" method="get">
      <input name="keyword" placeholder="Keyword">
      <button type="submit">Search</button>
    </form>
  `);
});

app.get("/search-result", (req, res) => {
  res.send(`You searched for: ${req.query.keyword}`);
});

app.get("/register", (req, res) => {
  res.send(`
    <h1>Register</h1>

    <form action="/register" method="post">
      <input name="username" placeholder="Username">
      <input
        name="password"
        type="password"
        placeholder="Password"
      >
      <button type="submit">Register</button>
    </form>
  `);
});

app.post("/register", (req, res) => {
  res.send(`Welcome ${req.body.username}`);
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});

/*
BÀI TẬP NHỎ 7

1. Form nào làm dữ liệu xuất hiện trên thanh địa chỉ?

=> Form tìm kiếm dùng method="get" làm dữ liệu xuất hiện
   trên thanh địa chỉ.


2. Form nào phù hợp hơn để tạo tài khoản?

=> Form đăng ký dùng method="post" phù hợp hơn vì dữ liệu
   được gửi trong request body thay vì đưa lên URL.


3. Nếu gửi password, vì sao không chỉ dựa vào POST?

=> POST không tự mã hóa dữ liệu. Khi gửi password vẫn cần
   sử dụng HTTPS và các cơ chế bảo mật phù hợp.
*/