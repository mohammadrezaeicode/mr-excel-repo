import {readFileSync} from "fs"
const json = JSON.parse(readFileSync("package.json"));
console.log(json.version)
