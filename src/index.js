require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const { initDatabase } = require("./db");
initDatabase();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("If you see this, it means that it works!");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening in port :${port}`);
});
