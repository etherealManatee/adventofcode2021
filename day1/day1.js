"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputData = fs.readFileSync("day1.txt", "utf-8");
var splitData = inputData.split("\n");
var count = 0;
for (var i = 1; i < splitData.length; i++) {
    var previous = parseInt(splitData[i - 1]);
    var current = parseInt(splitData[i]);
    if (current > previous) {
        count += 1;
    }
}
console.log(count);
//answer for part 1 is 1228
var sumCount = 0;
for (var i = 1; i < splitData.length - 1; i++) {
    var previousSum = parseInt(splitData[i - 1]) +
        parseInt(splitData[i]) +
        parseInt(splitData[i + 1]);
    var currentSum = parseInt(splitData[i]) +
        parseInt(splitData[i + 1]) +
        parseInt(splitData[i + 2]);
    if (currentSum > previousSum) {
        sumCount += 1;
    }
}
console.log(sumCount);
