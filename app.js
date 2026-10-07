const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("profile", {
    name: "선민광",
    major: "정보통신공학과",
    studentId: "202408053"
  });
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});