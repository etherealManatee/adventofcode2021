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
console.log(counts);
var half = splitData.length / 2;
var gamma = "";
var epsilon = "";
for (var k = 0; k < counts.length; k++) {
    console.log(counts[k], half);
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
