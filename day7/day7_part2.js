const fs = require('fs');
function readFileLineByLine(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    let grid = [];
    let timelines = []; // Track number of timelines at each position

    lines.forEach((line) => {
        line = line.replace(/\r/g, '');
        grid.push(line.split(''));
        timelines.push(new Array(line.length).fill(0));
    });

    // Find starting position 'S'
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 'S') {
                timelines[i][j] = 1; // Start with 1 timeline
                break;
            }
        }
    }

    // Process each row from top to bottom
    for (let i = 0; i < grid.length - 1; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (timelines[i][j] > 0) {
                // Current position has some timelines
                const nextRow = i + 1;

                if (grid[nextRow][j] === '^') {
                    // Hit a splitter - timelines split left and right
                    if (j - 1 >= 0) {
                        timelines[nextRow][j - 1] += timelines[i][j];
                    }
                    if (j + 1 < grid[nextRow].length) {
                        timelines[nextRow][j + 1] += timelines[i][j];
                    }
                } else if (grid[nextRow][j] === '.') {
                    // Continue straight down
                    timelines[nextRow][j] += timelines[i][j];
                }
            }
        }
    }

    // Count total timelines at the bottom row
    const lastRow = timelines[timelines.length - 1];
    const totalTimelines = lastRow.reduce((sum, count) => sum + count, 0);

    // Print the grid and timeline counts
    console.log('Grid:');
    for (let i = 0; i < grid.length; i++) {
        console.log(grid[i].join(''));
    }
    console.log('\nTimeline counts:');
    for (let i = 0; i < timelines.length; i++) {
        console.log(timelines[i].join(' '));
    }
    console.log('\nTotal timelines:', totalTimelines);

    return totalTimelines;
}


// Usage
readFileLineByLine('day7.txt');
//Answer: Splits count: 76624086587804
