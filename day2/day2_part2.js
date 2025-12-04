const fs = require('fs');

function readFileLineByLine(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n');
    let dialPos = 50;
    let dialAt0 = 0;
    let sum = 0;
    let totalNums = 0;
    lines.forEach((line, index) => {
        let range = line.split('-');
        let start = parseInt(range[0], 10);
        let end = parseInt(range[1], 10);
        for (let i = start; i <= end; i++) {


            // Check 1 level
            let firstChar = String(i)[0];
            let str = String(firstChar);
            let lenOfNum = String(i).length;
            if (lenOfNum === 1) {
                continue;
            }
            for (let j = 1; j < lenOfNum; j++) {
                str += firstChar;
            }
            if (str === String(i)) {
                console.log(`Invalid number : ${i}`);
                sum += i;
                continue;
            }

            if (lenOfNum > 2) {
                // Check 2 level
                let first2Chars = String(i)[0] + String(i)[1];
                let str2 = String(first2Chars);
                let flag = false;
                for (let j = 1; j < lenOfNum / 2; j++) {
                    str2 += first2Chars;
                    flag = true;
                }
                if (flag && str2 === String(i)) {
                    console.log(`Invalid number : ${i}`);
                    sum += i;
                    continue;
                }


                // Check 3 level
                let first3Chars = String(i)[0] + String(i)[1] + + String(i)[2];
                let str3 = String(first3Chars);
                let flag2 = false;
                for (let j = 1; j < lenOfNum / 3; j++) {
                    str3 += first3Chars;
                    flag2 = true;
                }
                if (flag2 && str3 === String(i)) {
                    console.log(`Invalid number : ${i}`);
                    sum += i;
                    continue;
                }


                // Check 4 level
                let first4Chars = String(i)[0] + String(i)[1] + + String(i)[2] + String(i)[3];
                let str4 = String(first4Chars);
                let flag3 = false;
                for (let j = 1; j < lenOfNum / 4; j++) {
                    str4 += first4Chars;
                    flag3 = true;
                }
                if (flag3 && str4 === String(i)) {
                    console.log(`Invalid number : ${i}`);
                    sum += i;
                    continue;
                }


                // Check 5 level
                let first5Chars = String(i)[0] + String(i)[1] + + String(i)[2] + String(i)[3] + String(i)[4];
                let str5 = String(first5Chars);
                let flag4 = false;
                for (let j = 1; j < lenOfNum / 5; j++) {
                    str5 += first5Chars;
                    flag4 = true;
                }
                if (flag4 && str5 === String(i)) {
                    console.log(`Invalid number : ${i}`);
                    sum += i;
                    continue;
                }

            }
        }

    });
    console.log(`Sum : ${sum}`);
}

// Usage
readFileLineByLine('day2.txt');
//Answer: Sum : 34421651192
