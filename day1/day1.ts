import * as fs from 'fs';
import { parse } from 'path';

const inputData: string = fs.readFileSync('day1.txt','utf-8');
const splitData: Array<string>  = inputData.split('\n')

var count: number = 0;

for (let i = 1; i < splitData.length; i++) {
    let previous: number = parseInt(splitData[i-1])
    let current: number = parseInt(splitData[i])
    if (current > previous) {
        count += 1
    }
}

console.log(count)