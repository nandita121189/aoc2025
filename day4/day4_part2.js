const fs = require('fs');

async function readFileLineByLine(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    let array = [];
    let total = 0, k = 1;
    let flag = false;
    for (let line of lines) {
        array.push(line.trim().split(''));
    }
    do {
        console.clear();
        console.log('Iteration:', k);
        console.log(array.map(row => row.join('')).join('\n'));
        console.log(`Total removed: ${total}`);

        flag = false;
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

                    if (topLeft + topRight + downLeft + downRight + top + bottom + left + right < 4) {
                        array[i][j] = '.';
                        total++;
                        flag = true;
                    }
                }
            }
        }

        k++;

        // Add delay for animation (100ms)
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await delay(100);

    } while (flag)
    console.log('Total :', total);

}

// Usage
// Make function async
(async () => {
    await readFileLineByLine('day4.txt');
})();
//Answer: Dial at 0 : 8936
