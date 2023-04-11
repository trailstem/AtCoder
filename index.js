"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputText = fs.readFileSync("/dev/stdin", "utf8");
var targetArray = inputText.split("");
var result = true;
for (var i = 0; i < targetArray.length; i++) {
    var target = targetArray[i];
    var count = (inputText.match(new RegExp(target, "g")) || []).length;
    if (count % 2 === 0) {
        result = true;
    }
    else {
        result = false;
    }
}
if (result) {
    console.log("Yes");
}
else {
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
