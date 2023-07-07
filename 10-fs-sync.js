// file-System module

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
console.log(first);

writeFileSync(
  "./content/result-sync.txt",
  `here i am writing something using 
writefilesync and finding result: ${first}`
);
