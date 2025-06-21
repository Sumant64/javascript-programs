// Subarray with given Sum in js

/**
 * Naive Solution:
 * o Consider all subarray sums and check for the given sum
 * o Time: O(n^2)
 * o Aux Space: O(1)
 * o Already done in the previous question
 */


// ================================================
// Efficient Solution

function isSum(arr, sum) {
    let s = new Set();
    let preSum = 0;

    for(let i = 0; i < arr.length; i++) {
        preSum += arr[i];
        if(preSum === sum)  {
            return true;
        }
        if(s.has(preSum - sum)) {
            return true;
        }
        s.add(preSum);
    }

    return false;
}

console.log(isSum([1, 4, 13, -3, -10, 5], 18));