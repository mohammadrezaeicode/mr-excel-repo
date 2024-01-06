const readFileSync = require("fs").readFileSync;
const json = JSON.parse(readFileSync("package.json"));
console.log(json.version)
