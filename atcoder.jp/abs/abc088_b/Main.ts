import { readFileSync } from "fs";

const input: string[] = readFileSync("/dev/stdin", "utf8").split("\n");
const N = Number(input[0]);
const A: number[] = Array.from(input[1].split(" "), Number);

// 降順(ポイントが高い順)にソート
const sorted: number[] = A.sort((a, b) => b - a);

let alicePoints = 0;
let bobPoints = 0;

for (const [i, v] of sorted.entries()) {
  if (i % 2 === 0) {
    alicePoints += v;
    continue;
  }
  bobPoints += v;
}

const ans = alicePoints - bobPoints;
console.log(ans);