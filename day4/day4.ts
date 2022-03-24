import { on } from "events";
import * as fs from "fs";

const inputData: string = fs.readFileSync("day4.txt", "utf-8");
const splitData: Array<string> = inputData.split("\n");

//array of the numbers drawn
const drawNumbers: string[] = splitData[0].split(",");
console.log(drawNumbers);

//remove the numbers drawn and the first empty line from the initial data
splitData.splice(0, 2);
console.log(splitData);
//re-organize the card storage data and add arrays for horizontal lines
// const allCards: string[][][];

let arr: string[][] = [h1, h2, h3, h4, h5];
console.log(arr);

const createCard = (arr: string[]) => {
  let h1: string[] = splitData[0].split(" ").filter((el) => el != "");
  let h2: string[] = splitData[1].split(" ").filter((el) => el != "");
  let h3: string[] = splitData[2].split(" ").filter((el) => el != "");
  let h4: string[] = splitData[3].split(" ").filter((el) => el != "");
  let h5: string[] = splitData[4].split(" ").filter((el) => el != "");
  let count: number = 0;
  for (let i = 0; i < arr.length; i++) {
    let card: string[] = [];
    if (arr[i] == "") {
      console.log("an empty line was detected");
      continue;
    }
    h1 = arr[i].split(" ").filter((el) => el != "");
  }
};

const isDrawn = (currentValue: string) => {
  currentValue = "-";
};
let lastDrawnNumber: string = ""
let winningCard: string[] = [];
const checkWin = (singleCardArray: string[][]) => {
    //check horizontals
  for (let i = 0; i < singleCardArray.length; i++) {
    if (singleCardArray[i].every(isDrawn)) {
      winningCard = singleCardArray[i];
      console.log(winningCard)
      return
    }
  }

  //check verticals
  let v1: string[] = [singleCardArray[0][0],singleCardArray[1][0],singleCardArray[2][0],singleCardArray[3][0],singleCardArray[4][0]]
  let v2: string[] = []
  let v3: string[] = []
  let v4: string[] = []
  let v5: string[] = []


};
