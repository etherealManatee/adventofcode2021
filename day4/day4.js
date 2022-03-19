"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputData = fs.readFileSync("day4.txt", "utf-8");
var splitData = inputData.split("\n");
//array of the numbers drawn
var drawNumbers = splitData[0].split(",");
console.log(drawNumbers);
//remove the numbers drawn and the first empty line from the initial data
splitData.splice(0, 2);
console.log(splitData);
//re-organize the card storage data and add arrays for horizontal lines
// const allCards: string[][][];
var h1 = splitData[0].split(" ").filter(function (el) { return el != ""; });
var h2 = splitData[1].split(" ").filter(function (el) { return el != ""; });
var h3 = splitData[2].split(" ").filter(function (el) { return el != ""; });
var h4 = splitData[3].split(" ").filter(function (el) { return el != ""; });
var h5 = splitData[4].split(" ").filter(function (el) { return el != ""; });
var arr = [h1, h2, h3, h4, h5];
console.log(arr);
var v1 = [h1[0], h2[0], h3[0], h4[0], h5[0]];
console.log(v1);
// for (let i = 0; i < splitData.length; i++) {
//     let h1: string[] = splitData[i].split(" ")
// }
