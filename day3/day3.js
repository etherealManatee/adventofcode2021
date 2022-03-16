"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputData = fs.readFileSync("day3.txt", "utf-8");
var splitData = inputData.split("\n");
var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (var i = 0; i < splitData.length; i++) {
    var element = splitData[i];
    for (var j = 0; j < element.length; j++) {
        if (element[j] == "1") {
            counts[j] += 1;
        }
    }
}
var half = splitData.length / 2;
var gamma = "";
var epsilon = "";
for (var k = 0; k < counts.length; k++) {
    if (counts[k] > half) {
        gamma = gamma + "1";
        epsilon = epsilon + "0";
    }
    else {
        gamma = gamma + "0";
        epsilon = epsilon + "1";
    }
}
var gammaDecimal = parseInt(gamma, 2);
var epsilonDecimal = parseInt(epsilon, 2);
var multipled = gammaDecimal * epsilonDecimal;
console.log(multipled);
//answer for part 1 is 3912944
console.log(gamma);
//part2
var currentData = splitData;
var placing = 0;
var oxygenGeneratorRating = function (data) {
    var oneArr = [];
    var zeroArr = [];
    if (data.length == 1) {
        return;
    }
    for (var i = 0; i < data.length; i++) {
        var currentElement = data[i];
        if (currentElement[placing] == "1") {
            oneArr.push(data[i]);
        }
        else if (currentElement[placing] == "0") {
            zeroArr.push(data[i]);
        }
    }
    console.log(oneArr.length, zeroArr.length);
    console.log(oneArr, zeroArr);
    if (oneArr.length == zeroArr.length) {
        currentData = oneArr;
        placing += 1;
    }
    else if (oneArr.length > zeroArr.length) {
        currentData = oneArr;
        placing += 1;
    }
    else if (zeroArr.length > oneArr.length) {
        currentData = zeroArr;
        placing += 1;
    }
    if (placing < 12) {
        oxygenGeneratorRating(currentData);
    }
};
oxygenGeneratorRating(currentData);
var oxygenGeneratorRatingDecimal = parseInt(currentData[0], 2);
console.log(oxygenGeneratorRatingDecimal);
currentData = splitData;
placing = 0;
var co2ScrubberRating = function (data) {
    var oneArr = [];
    var zeroArr = [];
    if (data.length == 1) {
        return;
    }
    for (var i = 0; i < data.length; i++) {
        if (data[i][placing] == "1") {
            oneArr.push(data[i]);
        }
        else {
            zeroArr.push(data[i]);
        }
    }
    console.log(oneArr.length, zeroArr.length);
    console.log(oneArr, zeroArr);
    if (oneArr.length == zeroArr.length) {
        console.log(oneArr.length, zeroArr.length, "same length");
        currentData = zeroArr;
        placing += 1;
    }
    else if (oneArr.length > zeroArr.length) {
        currentData = zeroArr;
        placing += 1;
    }
    else if (zeroArr.length > oneArr.length) {
        currentData = oneArr;
        placing += 1;
    }
    if (placing < 12) {
        co2ScrubberRating(currentData);
    }
};
co2ScrubberRating(currentData);
var co2ScrubberRatingDecimal = parseInt(currentData[0], 2);
console.log(oxygenGeneratorRatingDecimal * co2ScrubberRatingDecimal);
