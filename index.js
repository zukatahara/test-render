const express = require("express");
// const ytdl = require("ytdl-core");
const app = express();
const fs = require("fs");
// const path = require("path");
// var downloadFolder = path.join(process.env.USERPROFILE, "/Downloads/");
// console.log("downloadFolder", process.env.USERPROFILE);
// console.log(`aaa`);
app.get("/", (req, res) => {
  res.send('<a href="/abc">Click me!!!</a>')
});
app.get("/abc", async (req, res) => {
  res.sendFile("1674820418143_video.mp3", { root: __dirname });
  // const url = req.query.url
  //   ? req.query.url
  //   : "https://www.youtube.com/embed/wz-ZkPEGyeo?start=10&end=15";
  // ytdl(url, { filter: "audioonly" }).pipe(
  //   await fs.createWriteStream(`${Date.now()}_video.mp3`)
  // );
  // res.send("abc page");
});
app.listen(3000, () => console.log(`running on port 3000`));
