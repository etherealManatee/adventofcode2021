import { on } from 'events'
import * as fs from 'fs'

const inputData: string = fs.readFileSync('day4.txt', 'utf-8')
const splitData: Array<string> = inputData.split('\n')

//array of the numbers drawn
const drawNumbers: string[] = splitData[0].split(',')
console.log(drawNumbers)

//remove the numbers drawn and the first empty line from the initial data
splitData.splice(0, 2)
console.log(splitData)

//re-organize the card storage data and add arrays for horizontal lines
let cardArray: string[][][];

const createCards = (arr: string[]) => {
  let card: string[][] = []
  for (let i = 0; i < arr.length; i++) {
    let card: string[] = []
    if (arr[i] == '') {
      console.log('an empty line was detected')
      continue
    }
    let horizontal: string[] = arr[i].split(' ').filter((el) => el != '')
  }
}

const isDrawn = (currentValue: string) => {
  currentValue = '-'
}
let lastDrawnNumber: string = ''
let winningCard: string[] = []
const checkWin = (singleCardArray: string[][]) => {
  //check horizontals
  for (let i = 0; i < singleCardArray.length; i++) {
    if (singleCardArray[i].every(isDrawn)) {
      winningCard = singleCardArray[i]
      console.log(winningCard)
      return
    }
  }

  //check verticals
  let v1: string[] = [
    singleCardArray[0][0],
    singleCardArray[1][0],
    singleCardArray[2][0],
    singleCardArray[3][0],
    singleCardArray[4][0],
  ]
  let v2: string[] = [
    singleCardArray[0][1],
    singleCardArray[1][1],
    singleCardArray[2][1],
    singleCardArray[3][1],
    singleCardArray[4][1],
  ]
  let v3: string[] = [
    singleCardArray[0][2],
    singleCardArray[1][2],
    singleCardArray[2][2],
    singleCardArray[3][2],
    singleCardArray[4][2],
  ]
  let v4: string[] = [
    singleCardArray[0][3],
    singleCardArray[1][3],
    singleCardArray[2][3],
    singleCardArray[3][3],
    singleCardArray[4][3],
  ]
  let v5: string[] = [
    singleCardArray[0][4],
    singleCardArray[1][4],
    singleCardArray[2][4],
    singleCardArray[3][4],
    singleCardArray[4][4],
  ]
  let verticals: string[][] = [v1, v2, v3, v4, v5]
  console.log(verticals)
  for (let i = 0; i < verticals.length; i++) {
    if (verticals[i].every(isDrawn)) {
      winningCard = singleCardArray[i]
      console.log(winningCard)
      return
    }
  }
}