// Longest Common span with same sum in binary array

/**
 * O Longest Common subarray with given sum
 * ----------------------------------------
 * o We are given two binary subarrays of same sizes and we will find the max length till where both the subarray are anagram
 * 
 * I/P: arr1[] = [0, 1, 0, 0, 0, 0]
 *      arr2[] = [1, 0, 1, 0, 0, 1]
 * 
 * O/P: 4
 * 
 * I/P: arr1[] = [0, 1, 0, 1, 1, 1, 1]
 *      arr2[] = [1, 1, 1, 1, 1, 0, 1]
 * 
 * O/P: 6
 * 
 * I/P: arr1[] = [0, 0, 0]
 *      arr2[] = [1, 1, 1]
 * 
 * O/P: 0
 * 
 * I/P: arr1[] = [0, 0, 1, 0]
 *      arr2[] = [1, 1, 1, 1]
 * 
 * O/P: 1
 * 
 */

// ============================================
// Naive Solution:

/**
 * o Consider all common subarray of both the arrays and check for same sum.
 */

function maxCommon (arr1, arr2) {
    let res = 0;
    for(let i = 0; i < arr1.length; i++) {
        let sum1 = 0, sum2 = 0;
        for(let j = i; j < arr1.length; j++) {
            sum1 += arr1[j];
            sum2 += arr2[j];

            if(sum1 === sum2) {
                res = Math.max(res, j - i + 1);
            }
        }
    }

    return res;
}

console.log(maxCommon([0, 1, 0, 1, 1, 1, 1], [1, 1, 1, 1, 1, 0, 1]))

// ==============================================================
// Efficient Solution

/**
 * 1. Compute a difference array
 *      o Create diff = []
 *      o Do following for every element arr1[i] and arr2[i]
 *          diff[i] = arr1[i] - arr2[i]
 * 
 * 2. Return length of the longest subarray with 0 sum in different.
 * 
 * arr1 = [0, 1, 0, 0, 0]
 * arr2 = [1, 0, 1, 0, 0]
 * diff = [-1, 1, -1, 0, 0] 
 */


function maxlenEff(arr1, arr2, sum) {
    let diffArr = [];

    // chage 0 to -1
    for(let i = 0; i < arr1.length; i++) {
        diffArr.push(arr1[i] - arr2[j]);
    }
    

    let m = new Map();
    let preSum = 0, res = 0;
    for(let i = 0; i < diffArr.length; i++) {
        preSum += diffArr[i];
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

console.log(maxCommon([0, 1, 0, 0, 0, 0],  [1, 0, 1, 0, 0, 1], 0))