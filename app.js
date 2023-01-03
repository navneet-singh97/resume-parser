const express = require("express");
const app = express();
const ResumeParser = require("./resume_files/src");
var bodyParser = require("body-parser");
var cors = require("cors");
// const multer = require("multer");
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     let extArray = file.mimetype.split("/");
//     let extension = extArray[extArray.length - 1];
//     cb(null, file.fieldname + "." + extension); //Appending .jpg
//   },
// });
// const upload = multer({ storage: storage });
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post(
  "/",
  // upload.single("resume"),
  (req, res) => {
    // let extArray = req.file.mimetype.split("/");
    // let extension = extArray[extArray.length - 1];
    // // ResumeParser.parseResumeFile("./pdf/sunil.pdf", "a.json") // input file, output dir
    // ResumeParser.parseResumeFile(
    //   req.file.destination + req.file.fieldname + "." + extension,
    //   "a.json"
    // ) // input file, output dir
    //   .then((data) => {
    //     // return file;
    //     // console.log("Yay! " + file);
    //     res.json(data);
    //   })
    //   .catch((error) => {
    //     res.status(400).json(error);

    //     // return "error";
    //     // console.error(error);
    //   });

    let { url } = req.body;

    ResumeParser.parseResumeUrl(url) // url
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  }
);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// function getCV() {
// }
// getCV();
