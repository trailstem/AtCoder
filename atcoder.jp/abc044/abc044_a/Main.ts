import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const n = Number(input[0]);
const k = Number(input[1]);
const x = Number(input[2]);
const y = Number(input[3]);

let result: number = 0;
for (let i = 0; i < n; i++) {
  if (i < k) {
    result = result+x;
  } else {
    result = result+y;
  }
}
console.log(result);
