const fs = require('fs');

function readFileLineByLine(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    let sum = 0;

    lines.forEach((line, index) => {
        let largestNum = 0;
        for (let i = 0; i < line.length - 1; i++) {
            for (let j = i + 1; j < line.length - 1; j++) {
                let newNum = line[i] + line[j];
                if (newNum > largestNum) {
                    largestNum = newNum;
                }
            }
        }
        console.log(`Line ${index + 1}: Largest two-digit number is ${largestNum}`);
        sum += parseInt(largestNum, 10);

    });
    console.log(`Sum : ${sum}`);
}

// Usage
readFileLineByLine('day3.txt');
//Answer: Sum : 17144
