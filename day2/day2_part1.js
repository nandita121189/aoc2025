const fs = require('fs');

function readFileLineByLine(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    let sum = 0;
    lines.forEach((line, index) => {
        let range = line.split('-');
        let start = parseInt(range[0], 10);
        let end = parseInt(range[1], 10);
        for (let i = start; i <= end; i++) {
            // console.log(`Checking number: ${i} `);
            if (String(i).length % 2 == 0) {
                let multiplier = Math.pow(10, (String(i).length / 2))
                // console.log(`multiplier: ${multiplier}`);
                let num1 = i % multiplier;
                let num2 = Math.floor(i / multiplier);
                // console.log(`num1: ${num1} , num2: ${num2}`);
                if (num1 === num2) {
                    console.log(`Invalid number : ${i}`);
                    sum += i;
                }
            }

        }

    });
    console.log(`Sum : ${sum}`);
}

// Usage
readFileLineByLine('day2.txt');
//Answer: Sum : 19386344315
