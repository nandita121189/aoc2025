const fs = require('fs');

function readFileLineByLine(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    let array = [];
    let total = 0;
    for (let line of lines) {
        array.push(line.trim().split(''));
    }
    for (let i = 0; i < 136; i++) {
        for (let j = 0; j < 136; j++) {
            if (array[i][j] === '@') {
                let topLeft = array[i - 1] && array[i - 1][j - 1] === '@' ? 1 : 0;
                let topRight = array[i - 1] && array[i - 1][j + 1] === '@' ? 1 : 0;
                let downLeft = array[i + 1] && array[i + 1][j - 1] === '@' ? 1 : 0;
                let downRight = array[i + 1] && array[i + 1][j + 1] === '@' ? 1 : 0;
                let top = array[i - 1] && array[i - 1][j] === '@' ? 1 : 0;
                let bottom = array[i + 1] && array[i + 1][j] === '@' ? 1 : 0;
                let left = array[i] && array[i][j - 1] === '@' ? 1 : 0;
                let right = array[i] && array[i][j + 1] === '@' ? 1 : 0;
                // console.log(`Position [${i},${j}] ->`, { topLeft, topRight, downLeft, downRight, top, bottom, left, right });

                if (topLeft + topRight + downLeft + downRight + top + bottom + left + right < 4) {
                    total++;
                }
            }
        }
    }
    console.log('Total :', total);

}

// Usage
readFileLineByLine('day4.txt');
//Answer: Dial at 0 : 1428
