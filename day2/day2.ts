import * as fs from "fs";

const inputData: string = fs.readFileSync("day2.txt", "utf-8");
const splitData: Array<string> = inputData.split("\n");

var horizontal: number = 0;
var depth: number = 0;

for (let i = 0; i < splitData.length; i++) {
  let currentArr: Array<string> = splitData[i].split(" ");
  let command: string = currentArr[0];
  let units: number = parseInt(currentArr[1]);
  if (command === "forward") {
    horizontal += units;
  } else if (command === "down") {
    depth += units;
  } else {
    depth -= units;
  }
}

const multiplied: number = horizontal * depth;
console.log(horizontal, depth, multiplied);
//horizontal = 1911, depth = 724 and multiplying them together gives 1383564