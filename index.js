// const express = require("express");
// const ytdl = require("ytdl-core");
// const app = express();
// const fs = require("fs");
// // const path = require("path");
// // var downloadFolder = path.join(process.env.USERPROFILE, "/Downloads/");
// // console.log("downloadFolder", process.env.USERPROFILE);
// // console.log(`aaa`);
// app.get("/", (req, res) => {
//   res.send('<a href="/abc">Click me!!!</a>')
// });
// app.get("/abc", async (req, res) => {
//   res.sendFile("1674820418143_video.mp3", { root: __dirname });
//   // const url = req.query.url
//   //   ? req.query.url
//   //   : "https://www.youtube.com/embed/wz-ZkPEGyeo?start=10&end=15";
//   ytdl(url, { filter: "" }).pipe(
//     await fs.createWriteStream(`${Date.now()}_video.mp3`)
//   );
//   // res.send("abc page");
// });
// app.get("/xyz", (req,res)=>{
//   const url = "https://www.youtube.com/watch?v=wz-ZkPEGyeo&ab_channel=OrinnRemixs";
//   const startTime = "00:01:30";
//   const endTime = "00:02:30";
//   ytdl(url,{filter:"videoonlys",
//     // range:{
//     //   start:10357505,
//     //   end:12452856,
//     // }
//   }).pipe(fs.createWriteStream(`${Date.now()}.mp4`))
// })
// app.listen(3000, () => console.log(`running on port 3000`));
const express = require("express");
const app = express();
const fs = require("fs");
app.get("/",(req,res)=>{
  res.send(`hello`);

})
app.get("/create", (req, res) => {
  const data = req.query.data;
  if (data) {
    fs.appendFile(`${data}.txt`, `${data} and ${Date.now()}`, (err) => {
      if (err) throw err;
      res.send(`Tao thanh cong ${data}.txt`)
      console.log(`Saved!`);
    });
  }
});
app.get("/read", (req, res) => {
  const fileUrl = req.query.data;
  if (fileUrl) {
    const rs = fs.readFile(
      `${fileUrl}.txt`,
      { encoding: "utf-8" },
      (err, data) => {
        if (err) res.send(`ko tim thay file ${fileUrl}.txt`);
        res.sendFile(`${fileUrl}.txt`,{ root: __dirname });
        // res.download(`${fileUrl}.txt`);
      }
    );
  }
});
app.get("/delete", (req, res) => {
  const fileUrl = req.query.data;
  if (fileUrl) {
    fs.unlink(`${fileUrl}.txt`, function (err) {
      if (err) res.send(`Ko tim thay ${fileUrl}.txt`);
      res.send(`Delelte success!!!!`)
    });
  }
});
app.listen(3000, console.log(`running!!!`));
