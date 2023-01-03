const ResumeParser = require('./src');

function getCV()
{
  ResumeParser.parseResumeFile("./files/AB.pdf", "a.json") // input file, output dir
    .then((file) => {
      // return file;
      console.log("Yay! " + file);
    })
    .catch((error) => {
      return "error";
      // console.error(error);
    });
}
getCV();

// const fileDir = process.cwd() + '/files/';
// ResumeParser
//   .parseResumeFile(fileDir + 'test4.pdf', fileDir + 'compiled') //input file, output dir
//   .then(file => {
//     console.log("Yay! " + file);
//   })
//   .catch(error => {
//     console.log('parseResume failed');
//     console.error(error);
//   });

// ResumeParser.parseResumeUrl('https://github.com/likerRr/code4goal-resume-parser/blob/ce/public/ErnaniJoppert%20P%20Martins.pdf') // url
//   .then(data => {
//     console.log('Yay! ', data);
//   })
//   .catch(error => {
//     console.log('parseResume failed');
//     console.error(error);
//   });
