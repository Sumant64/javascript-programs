// Longest Subarray with Given Sum

/**
 * I/P: arr[] = [5, 8, -4, -4, 9, -2, 2]
 *      sum = 0
 * O/P: 3
 * 
 * I/P: arr[] = [3, 1, 0, 1, 8, 2, 3, 6]
 *      sum = 5
 * O/P: 4
 * 
 * I/P: arr[] = [8, 3, 7]
 *      sum = 15
 * O/P: 0
 */

// =============================================
// Naive Solution

/**
 * o Generate all subarray sum.
 * o Find the longest subarray with the sum same as given sum.
 * 
 */

function maxlen(arr, sum) {
    let res = 0;
    for(let i = 0; i < arr.length; i++) {
        let currSum = 0;
        for(let j = i; j < arr.length; j++) {
            currSum += arr[j];
            if(currSum === sum) {
                res = Math.max(res, j-i+1);
            }
        }
    }

    return res;
}

console.log(maxlen([3, 1, 0, 1, 8, 2, 3, 6], 5));

// ======================================================
// Efficient Solution:

function maxlenEff(arr, sum) {
    let m = new Map();
    let preSum = 0, res = 0;
    for(let i = 0; i < arr.length; i++) {
        preSum += arr[i];
        if(preSum === sum) {
            res = i + 1;
        }
        if(m.has(preSum) === false) {
            m.set(preSum, i);
        }
        if(m.has(preSum - sum)) {
            res = Math.max(res, i - m.get(preSum - sum));
        }
    }

    return res;
}

console.log(maxlenEff([3, 1, 0, 1, 8, 2, 3, 6], 5));

/**
 * Dry Run:
 * arr = [5, 2, 3]
 * 
 * i = 0: preSum = 5,
 *      res = 1
 *      m = [(5, 0)]
 * 
 * i = 1: preSum = 7
 *      res = 1
 *      m = [(5, 0), (7, 1)]
 * 
 * i = 2: preSum = 10
 *      res = 2
 *      m = [(5, 0), (7, 1), (10, 2)]
 */