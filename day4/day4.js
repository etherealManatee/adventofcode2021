"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputData = fs.readFileSync("day4.txt", "utf-8");
var splitData = inputData.split("\n");
//array of the numbers drawn
var drawNumbers = splitData[0].split(",");
// console.log(drawNumbers);
//remove the numbers drawn and the first empty line from the initial data
splitData.splice(0, 2);
//re-organize the card storage data
var allCardsArray = [];
var createCards = function (arr) {
    var card = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "") {
            // console.log("an empty line was detected");
            allCardsArray.push(card);
            card = [];
            continue;
        }
        var horizontal = arr[i].split(" ").filter(function (el) { return el != ""; });
        card.push(horizontal);
    }
};
createCards(splitData);
// console.log(allCardsArray);
var currentNumber = "";
var winningCard = [];
//function for checking win condition
var checkWin = function (singleCardArray) {
    //check horizontals
    for (var i = 0; i < singleCardArray.length; i++) {
        if (singleCardArray[i].every(function (e) { return e === "-"; })) {
            winningCard = singleCardArray;
            console.log(winningCard);
            console.log(currentNumber);
            return true;
        }
    }
    //check verticals
    var v1 = [
        singleCardArray[0][0],
        singleCardArray[1][0],
        singleCardArray[2][0],
        singleCardArray[3][0],
        singleCardArray[4][0],
    ];
    var v2 = [
        singleCardArray[0][1],
        singleCardArray[1][1],
        singleCardArray[2][1],
        singleCardArray[3][1],
        singleCardArray[4][1],
    ];
    var v3 = [
        singleCardArray[0][2],
        singleCardArray[1][2],
        singleCardArray[2][2],
        singleCardArray[3][2],
        singleCardArray[4][2],
    ];
    var v4 = [
        singleCardArray[0][3],
        singleCardArray[1][3],
        singleCardArray[2][3],
        singleCardArray[3][3],
        singleCardArray[4][3],
    ];
    var v5 = [
        singleCardArray[0][4],
        singleCardArray[1][4],
        singleCardArray[2][4],
        singleCardArray[3][4],
        singleCardArray[4][4],
    ];
    var verticals = [v1, v2, v3, v4, v5];
    for (var i = 0; i < verticals.length; i++) {
        if (verticals[i].every(function (e) { return e === "-"; })) {
            winningCard = singleCardArray;
            console.log(winningCard);
            console.log(currentNumber);
            return true;
        }
    }
    return false;
};
//function for finding the current draw number and replacing it with "-"
var playBingo = function (array, numbers) {
    //loop through all the draw numbers
    for (var i = 0; i < numbers.length; i++) {
        currentNumber = numbers[i];
        var status_1 = false;
        //loop through the entire array of cards
        for (var j = 0; j < array.length; j++) {
            var currentCard = array[j]; //card at index j
            //loop through each row in the card
            for (var k = 0; k < currentCard.length; k++) {
                var currentRow = currentCard[k];
                if (currentRow.findIndex(function (e) { return e === currentNumber; }) === -1) {
                    continue;
                }
                else {
                    var indexOfNumber = currentRow.findIndex(function (e) { return e === currentNumber; });
                    allCardsArray[j][k][indexOfNumber] = "-";
                }
            }
            status_1 = checkWin(currentCard);
            if (status_1 == true) {
                break;
            }
        }
        if (status_1 == true) {
            break;
        }
    }
};
playBingo(allCardsArray, drawNumbers);
// console.log(allCardsArray)
var flatten = winningCard.flat().filter(function (e) { return e != '-'; });
console.log(flatten);
var sum = 0;
for (var i = 0; i < flatten.length; i++) {
    sum += parseInt(flatten[i]);
}
console.log(currentNumber, parseInt(currentNumber) * sum);
