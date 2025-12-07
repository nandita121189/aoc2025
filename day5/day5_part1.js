const fs = require('fs');

function readFileLineByLine(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    let count = 0;
    let ranges = []
    lines.forEach((line, index) => {
        if (line.startsWith('  ')) {
            // console.log('empty line at', index, ':', index);
        } else if (line.indexOf('-') !== -1) {
            let range = line.split('-');
            let start = parseInt(range[0], 10);
            let end = parseInt(range[1], 10);
            ranges.push({ start, end });
            // console.log('Ranges ', index, ':', start + " " + end);
        } else {
            let isFresh = checkFreshness(ranges, line);
            if (isFresh) {
                count++;
            }
        }
    });
    console.log('Fresh count:', count);
}

function checkFreshness(ranges, line) {
    let itemId = parseInt(line, 10);
    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i].start <= itemId && itemId <= ranges[i].end) {
            return true;
        }

    }
}

// Usage
readFileLineByLine('day5.txt');
//Answer: Fresh items count: 775
