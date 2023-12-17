const express = require("express");

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the homepage" });
});

app.post("/", (req, res) => {
  res.status(200).send("You can post to this route");
});

app.listen(port, (req, res) => {
  console.log(`App running on port ${port}`);
});
