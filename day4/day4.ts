import { on } from "events";
import * as fs from "fs";
import { arrayBuffer } from "stream/consumers";

const inputData: string = fs.readFileSync("day4.txt", "utf-8");
const splitData: Array<string> = inputData.split("\n");

//array of the numbers drawn
const drawNumbers: string[] = splitData[0].split(",");
// console.log(drawNumbers);

//remove the numbers drawn and the first empty line from the initial data
splitData.splice(0, 2);

//re-organize the card storage data
let allCardsArray: string[][][] = [];

const createCards = (arr: string[]) => {
  let card: string[][] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "") {
      // console.log("an empty line was detected");
      allCardsArray.push(card);
      card = [];
      continue;
    }
    let horizontal: string[] = arr[i].split(" ").filter((el) => el != "");
    card.push(horizontal);
  }
};
createCards(splitData);
// console.log(allCardsArray);

let currentNumber: string = "";
let winningCard: string[][] = [];

//function for checking win condition
const checkWin = (singleCardArray: string[][]) => {
  //check horizontals
  for (let i = 0; i < singleCardArray.length; i++) {
    if (singleCardArray[i].every((e) => e === "-")) {
      winningCard = singleCardArray;
      // console.log(winningCard);
      // console.log(currentNumber);
      return true;
    }
  }

  //check verticals
  let v1: string[] = [
    singleCardArray[0][0],
    singleCardArray[1][0],
    singleCardArray[2][0],
    singleCardArray[3][0],
    singleCardArray[4][0],
  ];
  let v2: string[] = [
    singleCardArray[0][1],
    singleCardArray[1][1],
    singleCardArray[2][1],
    singleCardArray[3][1],
    singleCardArray[4][1],
  ];
  let v3: string[] = [
    singleCardArray[0][2],
    singleCardArray[1][2],
    singleCardArray[2][2],
    singleCardArray[3][2],
    singleCardArray[4][2],
  ];
  let v4: string[] = [
    singleCardArray[0][3],
    singleCardArray[1][3],
    singleCardArray[2][3],
    singleCardArray[3][3],
    singleCardArray[4][3],
  ];
  let v5: string[] = [
    singleCardArray[0][4],
    singleCardArray[1][4],
    singleCardArray[2][4],
    singleCardArray[3][4],
    singleCardArray[4][4],
  ];
  let verticals: string[][] = [v1, v2, v3, v4, v5];

  for (let i = 0; i < verticals.length; i++) {
    if (verticals[i].every((e) => e === "-")) {
      winningCard = singleCardArray;
      // console.log(winningCard);
      // console.log(currentNumber);
      return true;
    }
  }
  return false;
};

//function for finding the current draw number and replacing it with "-"
const playBingo = (array: string[][][], numbers: string[]) => {
  //loop through all the draw numbers
  for (let i = 0; i < numbers.length; i++) {
    currentNumber = numbers[i];
    let status: boolean = false;
    //loop through the entire array of cards
    for (let j = 0; j < array.length; j++) {
      let currentCard: string[][] = array[j]; //card at index j
      //loop through each row in the card
      for (let k = 0; k < currentCard.length; k++) {
        let currentRow: string[] = currentCard[k];
        if (currentRow.findIndex((e) => e === currentNumber) === -1) {
          continue;
        } else {
          let indexOfNumber: number = currentRow.findIndex(
            (e) => e === currentNumber
          );
          allCardsArray[j][k][indexOfNumber] = "-";
        }
      }
      status = checkWin(currentCard);
      if (status == true) {
        break;
      }
    }
    if (status == true) {
      break;
    }
  }
};

playBingo(allCardsArray, drawNumbers);
// console.log(allCardsArray)

const flatten: string[] = winningCard.flat().filter((e) => e != "-");
// console.log(flatten);
let sum: number = 0;
for (let i = 0; i < flatten.length; i++) {
  sum += parseInt(flatten[i]);
}
console.log(currentNumber, parseInt(currentNumber) * sum);

//part2
allCardsArray = [];
createCards(splitData);
let lastWinningNumber: string = "";
let currentWinningCard: string[][] = [];

//function for checking a single card for column or row that is all '-', if True, set the currentWinningCard and the lastWinningNumber
const checkWin2 = (singleCardArray: string[][], number: string): boolean => {
  //check horizontals
  for (let i = 0; i < singleCardArray.length; i++) {
    if (singleCardArray[i].every((e) => e === "-")) {
      currentWinningCard = singleCardArray;
      lastWinningNumber = number;
      return true;
    }
  }

  //check verticals
  let v1: string[] = [
    singleCardArray[0][0],
    singleCardArray[1][0],
    singleCardArray[2][0],
    singleCardArray[3][0],
    singleCardArray[4][0],
  ];
  let v2: string[] = [
    singleCardArray[0][1],
    singleCardArray[1][1],
    singleCardArray[2][1],
    singleCardArray[3][1],
    singleCardArray[4][1],
  ];
  let v3: string[] = [
    singleCardArray[0][2],
    singleCardArray[1][2],
    singleCardArray[2][2],
    singleCardArray[3][2],
    singleCardArray[4][2],
  ];
  let v4: string[] = [
    singleCardArray[0][3],
    singleCardArray[1][3],
    singleCardArray[2][3],
    singleCardArray[3][3],
    singleCardArray[4][3],
  ];
  let v5: string[] = [
    singleCardArray[0][4],
    singleCardArray[1][4],
    singleCardArray[2][4],
    singleCardArray[3][4],
    singleCardArray[4][4],
  ];
  let verticals: string[][] = [v1, v2, v3, v4, v5];
  for (let i = 0; i < verticals.length; i++) {
    if (verticals[i].every((e) => e === "-")) {
      winningCard = singleCardArray;
      lastWinningNumber = number;
      return true;
    }
  }
  return false;
};

const checkAllCardsForWin = (
  cardsArray: string[][][],
  currentNumber: string
): any => {
  for (let i = 0; i < cardsArray.length; i++) {
    let status: boolean = false;
    status = checkWin2(allCardsArray[i], currentNumber);
    if (status === true) {
      allCardsArray.splice(i, 1);
      return checkAllCardsForWin(allCardsArray, currentNumber);
    }
  }
};

const playBingo2 = (numbers: string[]) => {
  //loop through all the draw numbers
  for (let i = 0; i < numbers.length; i++) {
    currentNumber = numbers[i];
    markNumber(currentNumber, allCardsArray);
    checkAllCardsForWin(allCardsArray, currentNumber);
  }
};

//check each card for the number, and if exist, replace it with '-'
const markNumber = (currentNumber: string, cardArray: string[][][]) => {
  for (let j = 0; j < cardArray.length; j++) {
    let status: boolean = false;
    let currentCard: string[][] = cardArray[j]; //card at index j
    //loop through each row in the card
    for (let k = 0; k < currentCard.length; k++) {
      let currentRow: string[] = currentCard[k];
      if (currentRow.findIndex((e) => e === currentNumber) === -1) {
        continue;
      } else {
        let indexOfNumber: number = currentRow.findIndex(
          (e) => e === currentNumber
        );
        allCardsArray[j][k][indexOfNumber] = "-";
      }
    }
  }
};

playBingo2(drawNumbers);

const flatten2: string[] = winningCard.flat().filter((e) => e != "-");
console.log(flatten2);
let sum2: number = 0;
for (let i = 0; i < flatten2.length; i++) {
  sum2 += parseInt(flatten2[i]);
}
console.log(parseInt(lastWinningNumber) * sum2);
