const express = require("express");
const app = express();
const port = 3000;

const { initDatabase } = require("./db");
initDatabase();

app.get("/", (req, res) => {
  res.send("If you see this, it means that it works!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
