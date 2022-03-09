"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputData = fs.readFileSync('day1.txt', 'utf-8');
var splitData = inputData.split('\n');
var count = 0;
for (var i = 1; i < splitData.length; i++) {
    var previous = parseInt(splitData[i - 1]);
    var current = parseInt(splitData[i]);
    if (current > previous) {
        count += 1;
    }
}
console.log(count);
