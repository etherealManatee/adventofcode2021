"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputData = fs.readFileSync("day2.txt", "utf-8");
var splitData = inputData.split("\n");
console.log(splitData);
var horizontal = 0;
var depth = 0;
for (var i = 0; i < splitData.length; i++) {
    var currentArr = splitData[i].split(" ");
    var command = currentArr[0];
    var units = parseInt(currentArr[1]);
    if (command === "forward") {
        horizontal += units;
    }
    else if (command === "down") {
        depth += units;
    }
    else {
        depth -= units;
    }
}
var multiplied = horizontal * depth;
console.log(horizontal, depth, multiplied);
