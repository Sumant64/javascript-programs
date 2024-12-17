// Maximum sum subarray

/**
 * We need to find out the maximum sum with the consecutive subarray's
 * 
 * I/P: [2, 3, -8, 7, -1, 2, 3] ==> max sum of [7, -1, 2, 3]
 * O/P: 11
 * 
 * I/P: [5, 8, 3]
 * O/P: 16
 * 
 * I/P: [-6, -1, -8]
 * O/P: -1
 */

// =================================
/**
 * Naive Solution
 * 
 * Compute sum of every subarray and return the maximum of all.
 * o max subarray ==> (n * (n + 1))/2
 *
 */

function maxSum(arr) {
    let res = arr[0];
    for(let i = 0; i < arr.length; i++) {
        let curr = 0;
        for(let j = i; j < arr.length; j++) {
            curr += arr[j];
            res = Math.max(res, curr);
        }
    }
    return res;
}

// console.log(maxSum([-6, -1, -8]))
/**
 * [1, -2, 3, -1]
 * Dry Run:
 * res = 1
 * i = 0: curr = 1
 *        curr = -1
 *        curr = 2, res = 2
 *        curr = 1
 * i = 1: curr = -2
 *        curr = 1
 *        curr = 0
 * i = 2: curr = 3, res = 3
 *        curr = 2
 * i = -3: curr = -1    
 */

// =============================================
// Efficient Solution ==> Kadane's Algorithm

/**
 * Kadane's Algorithm:
 * o We will traverse the array one time.
 * o a0, a1,... a i-1, ai, a i+1, ....a n-1
 *      We should know the max res till i - 1, then we will compare it with the res of a of i.
 * o Idea is to compute maximum sum ending with every element and keep track of maximum of all these values.
 * 
 */

function maxSum(arr) {
    let res = arr[0];
    let maxEnding = arr[0];
    for(let i = 1; i < arr.length; i++) {
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);
        res = Math.max(maxEnding, res);
    }
    return res;
}

console.log(maxSum([5, 8, 3]))

/**
 * Ex: [-3, 8, -2, 4]
 * 
 * res = -3
 * maxEnding = -3
 * 
 * i = 1: maxEnding = 8
 *        res = 8
 * i = 2: maxEnding = 6 ==> max(8-2, -2)
 * i = 3: maxEnding = 10
 *        res = 10
 */


