const express = require("express");
const { resolve } = require("path");
require("dotenv").config();

const app = express();
const port = 8080;
const is_admin = process.env.IS_ADMIN;

app.use(express.static("static"));

app.get("/", (req, res) => {
  if (is_admin) {
    res.send({
      message: "Welcome Admin",
      data: ["Admin Data 1", "Admin Data 2"],
    });
  } else {
    res.send({
      message: "Welcome User",
      data: ["User Data 1", " User Data 2", " User Data 3", " User Data"],
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
