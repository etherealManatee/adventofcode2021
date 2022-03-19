import { on } from "events";
import * as fs from "fs";

const inputData: string = fs.readFileSync("day4.txt", "utf-8");
const splitData: Array<string> = inputData.split("\n");

//array of the numbers drawn
const drawNumbers: string[] = splitData[0].split(",");
console.log(drawNumbers)

//remove the numbers drawn and the first empty line from the initial data
splitData.splice(0,2)
console.log(splitData)
//re-organize the card storage data and add arrays for horizontal lines
// const allCards: string[][][];
let h1: string[] = splitData[0].split(" ").filter(el => el != "")
let h2: string[] = splitData[1].split(" ").filter(el => el != "")
let h3: string[] = splitData[2].split(" ").filter(el => el != "")
let h4: string[] = splitData[3].split(" ").filter(el => el != "")
let h5: string[] = splitData[4].split(" ").filter(el => el != "")
let arr: string[][] = [h1,h2,h3,h4,h5]
console.log(arr)
let v1: string[] = [h1[0],h2[0],h3[0],h4[0],h5[0]]
console.log(v1)
// for (let i = 0; i < splitData.length; i++) {
//     let h1: string[] = splitData[i].split(" ")
// }
