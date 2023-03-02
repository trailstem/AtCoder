import { readFileSync } from "fs";

//改行入力受け取る
const input: string[] = readFileSync("/dev/stdin", "utf8").split("");
let result: string = "";
let resultArray: string[] = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "B") {
    resultArray.pop();
    continue;
  } else {
    resultArray.push(input[i]);
  }
}
for (let i = 0; i < resultArray.length; i++) {
  result = result + resultArray[i];
}
console.log(result);
