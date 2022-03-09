import * as fs from "fs";

const inputData: string = fs.readFileSync("day1.txt", "utf-8");
const splitData: Array<string> = inputData.split("\n");

var count: number = 0;

for (let i = 1; i < splitData.length; i++) {
  let previous: number = parseInt(splitData[i - 1]);
  let current: number = parseInt(splitData[i]);
  if (current > previous) {
    count += 1;
  }
}

console.log(count);

//answer for part 1 is 1228

var sumCount: number = 0;

for (let i = 1; i < splitData.length - 1; i++) {
  let previousSum: number =
    parseInt(splitData[i - 1]) +
    parseInt(splitData[i]) +
    parseInt(splitData[i + 1]);
  let currentSum: number =
    parseInt(splitData[i]) +
    parseInt(splitData[i + 1]) +
    parseInt(splitData[i + 2]);
  if (currentSum > previousSum) {
    sumCount += 1;
  }
}

console.log(sumCount);

//answer for part 2 is 1257
