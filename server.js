const express = require("express");
const router = require("./router");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
app.use("/V1", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
