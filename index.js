const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`hello`);
});
app.get("/abc", (req, res) => {
  res.send("abc page");
});
app.listen(3000, () => console.log(`running on port 3000`));
