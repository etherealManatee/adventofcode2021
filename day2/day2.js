"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputData = fs.readFileSync("day2.txt", "utf-8");
var splitData = inputData.split("\n");
var horizontal = 0;
var depth = 0;
// for (let i = 0; i < splitData.length; i++) {
//   let currentArr: Array<string> = splitData[i].split(" ");
//   let command: string = currentArr[0];
//   let units: number = parseInt(currentArr[1]);
//   if (command === "forward") {
//     horizontal += units;
//   } else if (command === "down") {
//     depth += units;
//   } else {
//     depth -= units;
//   }
// }
// const multiplied: number = horizontal * depth;
// console.log(horizontal, depth, multiplied);
//horizontal = 1911, depth = 724 and multiplying them together gives 1383564
var aim = 0;
//down increases aim, up decreases aim
//forward increases horizontal AND increase depth (current aim * X)
for (var i = 0; i < splitData.length; i++) {
    var currentArr = splitData[i].split(" ");
    var command = currentArr[0];
    var units = parseInt(currentArr[1]);
    if (command === "down") {
        aim += units;
    }
    else if (command === "up") {
        aim -= units;
    }
    else {
        horizontal += units;
        depth += aim * units;
    }
}
var multiplied2 = horizontal * depth;
console.log(multiplied2);
