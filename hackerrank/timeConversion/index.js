'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let hour = s.substring(0,2);
    let minute = s.substring(3,5);
    let second = s.substring(6,8);
    let PM_AM = s.substring(8,10);
    let mapping = {
        '12': '00',
        '01': '13',
        '02': '14',
        '03': '15',
        '04': '16',
        '05': '17',
        '06': '18',
        '07': '19',
        '08': '20',
        '09': '21',
        '10': '22',
        '11': '23'
    }
    if(PM_AM === 'PM') {
        if(hour !== '12') {
            hour = mapping[hour];
        }
    }
    if(PM_AM === 'AM') {
        if(hour === '12') {
            hour = '00';
        }
    }
    return hour + ':' + minute + ':' + second;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
