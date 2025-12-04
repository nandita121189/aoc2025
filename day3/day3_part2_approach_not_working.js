function readFileLineByLine(filePath) {
    let sum = 0;
    const lines = [
        '987654321111111',
        '811111111111119',
        '234234234234278',
        '818181911112111'
    ];

    lines.forEach((line, index) => {
        debugger;
        let largestNum = "";
        let positionMap = {};
        let numberMap = {};

        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            positionMap[i + 1] = char;
            if (numberMap[char]) {
                numberMap[char].push(i + 1);
            } else {
                numberMap[char] = [i + 1];
            }
            numberMap[char].sort((a, b) => b - a);
        }
        // console.log("positionMap");
        // console.log(positionMap);

        // console.log("numberMap");
        // console.log(numberMap);
        // let finalNumber = {};
        let finalNumberArray = [];
        debugger;
        for (let j = 9, k = 12; j >= 0 && k != 0; j--) {
            if (!numberMap[j]) {
                continue;
            }
            let tempNm = numberMap[j];
            // if (tempNm.length <= k) {
            // finalNumber[j] = tempNm;
            // finalNumberArray.push(...tempNm);
            // k -= tempNm.length;
            for (let pos of tempNm) {
                finalNumberArray.push(pos);
                k--;
                let largestNumberFRomfn = largestNumberFromPositions(positionMap, finalNumberArray);
                if (!largestNum) {
                    largestNum = largestNumberFRomfn;
                } else if (parseInt(largestNum, 10) < parseInt(largestNumberFRomfn, 10)) {
                    largestNum = largestNumberFRomfn;
                } else {
                    finalNumberArray.pop();
                    k++;
                }
                if (k == 0) {
                    break;
                }
            }
            // } else {
            //     // finalNumber[j] = tempNm.slice(0, k);
            //     // finalNumberArray.push(...tempNm.slice(0, k));
            //     // k = 0;
            // }
        }

        console.log(`largestNum for line ${index + 1}: ${largestNum}`);
        console.log("################################################");
        // console.log(`Line ${index + 1}: Largest 12-digit number is ${largestNum}`);
        sum += parseInt(largestNum, 10);
    });

    console.log(`Sum : ${sum}`);
}

function largestNumberFromPositions(positionMap, finalNumberArray) {
    let largestNum = "";
    // console.log("finalNumber", finalNumber);
    finalNumberArray.sort((a, b) => a - b);
    // console.log("finalNumberArray", finalNumberArray);
    finalNumberArray.forEach((pos, idx) => {
        largestNum += positionMap[pos];
    });
    // largestNum = largestNum.split('').reverse().join('');
    return largestNum;
}
readFileLineByLine('day3_sample.txt');