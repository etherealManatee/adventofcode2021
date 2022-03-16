import { on } from "events";
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
console.log(gamma);

//part2
let currentData: Array<string> = splitData;
let placing: number = 0;

const oxygenGeneratorRating = (data: Array<string>) => {
  let oneArr: Array<string> = [];
  let zeroArr: Array<string> = [];
  if (data.length == 1){
    return
  }
  for (let i = 0; i < data.length; i++) {
    let currentElement: string = data[i];
    if (currentElement[placing] == "1") {
      oneArr.push(data[i]);
    } else if (currentElement[placing] == "0") {
      zeroArr.push(data[i]);
    }
  }
  console.log(oneArr.length, zeroArr.length);
  console.log(oneArr, zeroArr);
  if (oneArr.length == zeroArr.length) {
    currentData = oneArr;
    placing += 1;
  } else if (oneArr.length > zeroArr.length) {
    currentData = oneArr;
    placing += 1;
  } else if (zeroArr.length > oneArr.length) {
    currentData = zeroArr;
    placing += 1;
  }
  if (placing < 12) {
    oxygenGeneratorRating(currentData);
  }
};

oxygenGeneratorRating(currentData);
const oxygenGeneratorRatingDecimal: number = parseInt(currentData[0], 2);

console.log(oxygenGeneratorRatingDecimal)

currentData = splitData;
placing = 0;

const co2ScrubberRating = (data: Array<string>) => {
  let oneArr: Array<string> = [];
  let zeroArr: Array<string> = [];

  if (data.length == 1){
    return
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i][placing] == "1") {
      oneArr.push(data[i]);
    } else {
      zeroArr.push(data[i]);
    }
  }

  console.log(oneArr.length, zeroArr.length);
  console.log(oneArr, zeroArr);
  
  if (oneArr.length == zeroArr.length) {
    console.log(oneArr.length, zeroArr.length, "same length");
    currentData = zeroArr;
    placing += 1
  } else if (oneArr.length >zeroArr.length) {
    currentData = zeroArr;
    placing += 1;
  } else if (zeroArr.length > oneArr.length){
    currentData = oneArr;
    placing += 1;
  }
  if (placing < 12) {
    co2ScrubberRating(currentData);
  }
};
co2ScrubberRating(currentData);

const co2ScrubberRatingDecimal: number = parseInt(currentData[0], 2);

console.log(oxygenGeneratorRatingDecimal * co2ScrubberRatingDecimal);
