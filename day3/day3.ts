import * as fs from "fs";

const inputData: string = fs.readFileSync("day3.txt", "utf-8");
const splitData: Array<string> = inputData.split("\n");

var counts: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < splitData.length; i++) {
  let element: string = splitData[i];
  for (let j = 0; j < element.length; j++) {
    if (element[j] == "1") {
      counts[j] += 1;
    }
  }
}

const half: number = splitData.length / 2;
var gamma: string = "";
var epsilon: string = "";
for (let k = 0; k < counts.length; k++) {
  console.log(counts[k], half);
  if (counts[k] > half) {
    gamma = gamma + "1";
    epsilon = epsilon + "0";
  } else {
    gamma = gamma + "0";
    epsilon = epsilon + "1";
  }
}
const gammaDecimal: number = parseInt(gamma, 2);
const epsilonDecimal: number = parseInt(epsilon, 2);
const multipled = gammaDecimal * epsilonDecimal;
console.log(multipled);
//answer for part 1 is 3912944
