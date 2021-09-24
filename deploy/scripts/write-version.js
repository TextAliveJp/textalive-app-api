const fs = require("fs");

const pkg = JSON.parse(fs.readFileSync("package.json", { encoding: "utf8" }));
fs.writeFileSync("VERSION.txt", String(pkg.version), { encoding: "utf8" });
