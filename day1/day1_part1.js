const fs = require('fs');

function readFileLineByLine(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    let dialPos = 50;
    let dialAt0 = 0;
    lines.forEach((line, index) => {
        let direction = line.charAt(0);
        let distance = parseInt(line.slice(1), 10);
        console.log(`Processing Line ${index + 1}: Direction: ${direction}, Distance: ${distance}`);
        if (direction === 'R') {
            for (let i = 1; i <= distance; i++) {
                if (dialPos === 99) {
                    dialPos = 0;
                } else {
                    dialPos += 1;
                }
            }
        } else if (direction === 'L') {
            for (let i = 1; i <= distance; i++) {
                if (dialPos === 0) {
                    dialPos = 99;
                } else {
                    dialPos -= 1;
                }
            }
        }
        // console.log(`Line ${index + 1}: ${line.trim()} => Dial Position: ${dialPos}`);
        if (dialPos === 0) {
            dialAt0++;
            console.log(`Dial reached 0 at line ${index + 1}`);
        }
    });
    console.log(`Dial at 0 : ${dialAt0}`);
}

// Usage
readFileLineByLine('day1.txt');
//Answer: Dial at 0 : 1036
