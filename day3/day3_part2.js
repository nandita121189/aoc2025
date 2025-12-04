const fs = require('fs');

function readFileLineByLine(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n').filter(line => line.trim() !== ''); // Filter empty lines
    let sum = 0;

    lines.forEach((line, index) => {
        const n = line.length - 1;
        console.log(`Processing line ${index + 1}: ${n}`);
        const k = 12;
        let largestNum = '';
        let start = 0;
        let end = n - k;  // Initial window: positions 0 to (n-k)

        // Pick 12 digits
        for (let i = 0; i < k; i++) {
            // Find the max digit in the current window [start, end]
            let maxDigit = '0';
            let maxPos = start;

            for (let pos = start; pos <= end; pos++) {
                if (line[pos] > maxDigit) {
                    maxDigit = line[pos];
                    maxPos = pos;
                }
            }

            // Add the best digit
            largestNum += maxDigit;

            // Move start past the selected position
            start = maxPos + 1;

            // Expand the window if possible
            if (end < n - 1) {
                end++;
            }
        }

        console.log(`largestNum for line ${index + 1}: ${largestNum}`);
        console.log("################################################");
        sum += parseInt(largestNum, 10);
    });

    console.log(`Sum : ${sum}`);
}

readFileLineByLine('day3.txt');
// Answer: Sum : 170371185255900