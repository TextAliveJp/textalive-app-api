const fs = require("fs");

const destDirName = "package";
const destFilePath = `${destDirName}/package.json`;

let target;
try {
  target = JSON.parse(fs.readFileSync(destFilePath, { encoding: "utf8" }));
} catch (_e) {
  target = JSON.parse(fs.readFileSync("package.json", { encoding: "utf8" }));
}
const source = JSON.parse(
  fs.readFileSync("package.publish.json", { encoding: "utf8" })
);

Object.assign(target, source);
const content = JSON.stringify(target, null, "  ");

!fs.existsSync(destDirName) && fs.mkdirSync(destDirName);
fs.writeFileSync(destFilePath, content, { encoding: "utf8" });
