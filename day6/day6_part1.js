const fs = require('fs');

function readFileLineByLine(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    let count = 0;
    let splitLinesArray = [];
    lines.forEach((line, index) => {
        line = line.replace(/\r/g, '');
        let splitLine = line.split(' ');
        splitLine = splitLine.filter(part => {
            return part !== '';
        })
        splitLinesArray.push(splitLine);
    });
    console.log(splitLinesArray);
    for (let i = 0; i < splitLinesArray[0].length; i++) {
        // console.log('Processing line:', splitLinesArray[4][i]);
        if (splitLinesArray[4][i] === '*') {
            // console.log('Multiplying:', splitLinesArray[0][i], splitLinesArray[1][i], splitLinesArray[2][i], splitLinesArray[3][i]);
            count += parseInt(splitLinesArray[0][i], 10) * parseInt(splitLinesArray[1][i], 10) * parseInt(splitLinesArray[2][i], 10) * parseInt(splitLinesArray[3][i], 10);
        } else if (splitLinesArray[4][i] === '+') {
            // console.log('Adding:', splitLinesArray[0][i], splitLinesArray[1][i], splitLinesArray[2][i], splitLinesArray[3][i]);
            count += parseInt(splitLinesArray[0][i], 10) + parseInt(splitLinesArray[1][i], 10) + parseInt(splitLinesArray[2][i], 10) + parseInt(splitLinesArray[3][i], 10);
        }
    }
    console.log('Final:', count);
}


// Usage
readFileLineByLine('day6.txt');
//Answer: Fresh items count: 7229350537438
