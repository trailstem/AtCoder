import * as fs from "fs";

const inputText = fs.readFileSync("/dev/stdin", "utf8");
const targetArray = inputText.split("");

let result = true;


for (let i = 0; i < targetArray.length; i++) {
  
  let target = targetArray[i];
  let count = (inputText.match(new RegExp(target, "g")) || []).length;
  if (count % 2 === 0) {
    result = true;
  } else {
    result = false;
  }
}

if (result) {
  console.log("Yes");
} else {
  console.log("No");
}
// let result = false;

// for (let i = 0; i < input.length; i++) {
//   let count = 0;
//   for (let j = 0; j < input.length; j++) {
//     if (input[i] === targetArray[j]) {
//       count = count + 1;
//     }
//   }

//   if (count % 2 === 0) {
//     result = true;
//   } else if (count % 2 === 1) {
//     result = false;
//   }
// }

// if (result) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
