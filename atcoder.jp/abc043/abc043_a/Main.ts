import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split(" ");
const a = +input[0];

let result: number = 0;

for (let i = 1; i <= a; i++) {
  result = result + i;
}

console.log(result);
