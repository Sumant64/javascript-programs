// Maximum Length Even Odd Subarray

/**
 * I/P: [10, 12, 14, 7, 8] ==> [14, 7, 8]
 * O/P: 3
 * 
 * I/P: [7, 10, 13, 14]
 * O/P: 4
 * 
 * I/P: [12, 8, 10]
 * O/P: 1
 */

// ======================================
// Naive Solution

/**
 * Idea: Check for every subarray and find the max length.
 */

function maxEvenOdd(arr) {
    let res = 1;
    for (let i = 0; i < arr.length; i++) {
        let curr = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[j] % 2 === 0 && arr[j - 1] % 2 !== 0) ||
                (arr[j] % 2 !== 0 && arr[j - 1] % 2 === 0)
            ) {
                curr++;
            } else {
                break;
            }
            res = Math.max(res, curr);
        }
    }
    return res;
}

// console.log(maxEvenOdd([7, 10, 13, 14]))

/**
 * [5, 10, 6, 3, 8]
 * Dry Run:
 * res = 1
 * i = 0: curr = 2, res = 2
 * i = 1: curr = 1, res = 2
 * i = 2: curr = 3, res = 3
 * i = 3: curr = 2, 
 * i = 4: curr = 1, res = 3
 */

// ====================================================
// Efficient Solution

/**
 * Idea: The idea is similar to maximum consecutive 1's problem:
 */

function maxEvenOddEff(arr) {
    let res = 1, curr = 1;
    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] % 2 === 0 && arr[i - 1] % 2 !== 0) ||
            (arr[i] % 2 !== 0 && arr[i - 1] % 2 === 0)
        ) {
            curr++;
            res = Math.max(curr, res);
        } else {
            curr = 1;
        }
    }
    return res;
}

console.log(maxEvenOddEff([12, 8, 10]))