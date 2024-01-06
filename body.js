const { exec, execSync } = require("child_process");
let result = execSync("git log -p -1 -- CHANGELOG.md");
let stdout = result.toString();
// console.log()
// (err, stdout, stderr) => {
//   if (err) {
//     // node couldn't execute the command
//     return;
//   }

// the *entire* stdout and stderr (buffered)
//   console.log(`stdout: ${stdout}`);
let x = "*************************";
let pos = stdout.replace(/@@[\n\s\S]*?@@/, x);
let res = pos
  .substring(pos.indexOf(x) + x.length + 1)
  .replace(/@@[\n\s\S]*?@@/, "");
console.log(
  res.match(/\+.*/g).reduce((result, current) => {
    return result + "\n" + current.substring(1);
  }, "").substring(1)
);
//   console.log(`stderr: ${stderr}`);
// }
