const fs = require('fs');
function readFileLineByLine(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    let count = 0;
    let splitLinesArray = [];
    lines.forEach((line, index) => {
        line = line.replace(/\r/g, '');
        splitLinesArray.push(line.split(''));
    });
    // console.log('Final:', splitLinesArray);

    for (let i = 0; i < splitLinesArray.length; i++) {
        for (let j = 0; j < splitLinesArray[i].length; j++) {
            if (splitLinesArray[i][j] === 'S') {
                if (splitLinesArray[i + 1] && splitLinesArray[i + 1][j] === "^") {
                    splitLinesArray[i + 1][j - 1] = 'S';
                    splitLinesArray[i + 1][j + 1] = 'S';
                    count++;
                }
                if (splitLinesArray[i + 1] && splitLinesArray[i + 1][j] === ".") {
                    splitLinesArray[i + 1][j] = 'S';
                }
            }
        }
    }

    console.log('Splits:', count);
}


// Usage
readFileLineByLine('day7.txt');
//Answer: Splits count: 1656
