// Maximum Circular sum subarray

/**
 * All Circular subarray's of [1, 2, 3]
 * o Normal subarray: [1], [2], [3], [1, 2], [2, 3], [1, 2, 3]
 * o Circular subarray: [3, 1], [2, 3, 1], [3, 1, 2]
 * 
 * Ex:
 * I/P: [5, -2, 3, 4]
 * O/P: 12
 * 
 * I/P: [2, 3, -4]
 * O/P: 5
 * 
 * I/P: [8, -4, 3, -5, 4]
 * O/P: 12
 * 
 * I/P: [-3, 4, 6, -2]
 * O/P: 10
 * 
 * I/P: [3, -4, 5, 6, -8, 7]
 * O/P: 17
 */

/**
 * Naive Solution
 * o Compute the sum of all the subarrays and find the maximum
 */

function maxCircular(arr) {
    let res = arr[0];
    for(let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        res = Math.max(res, curr);
        for(let j = 1; j < arr.length; j++) {
            let index = (i + j) % arr.length;
            curr += arr[index];
            res = Math.max(res, curr);
        }
    }
    return res;
}

// console.log(maxCircular([10, -5, 5]))

/**
 * Dry Run: [10, -5, 5]
 * 
 * res = 10
 * i = 0: curr = 10
 *        curr = 5
 *        curr = 10
 * i = 1: curr = -5
 *        curr = 0
 *        curr = 10
 * i = 2: curr = 5
 *        curr = 15
 *        curr = 10
 *      res = 15   
 * 
 */

// ================================================
// Efficient Solution: use of Kadane's Algorithm

/**
 * Idea:
 * o Find the maximum of the following two:
 * 1. Maximum sum of the normal subarray
 * 2. Maximum sum of the only circular subarray.
 * 
 * o To find the maximum sum of the only circular subarray:
 * --> ex [10, -5, 5]
 *      o For this max sum circular subarray = 5 + 10 = 15
 *      o We left the minimum elements from between i.e. -5
 *      o So we can also find the mimumum sum of the subarray and subtract from the sum
 *      o To find the min sum also we use the Kadane's Algorithm
 */

function maxSumCircularEff(arr) {
    let sum = 0;
    arr.forEach(x => {sum += x});
    
    let maxEnd = arr[0], minEnd = arr[0];
    let maxNormal = arr[0], minNormal = arr[0];

    for(let i = 1; i < arr.length; i++){
        maxEnd = Math.max(maxEnd + arr[i], arr[i]);
        maxNormal = Math.max(maxNormal, maxEnd);

        minEnd = Math.min(minEnd + arr[i], arr[i]);
        minNormal = Math.min(minNormal, minEnd);
    }

    if(maxNormal < 0) {
        return maxNormal;
    }
    return Math.max(maxNormal, sum - minNormal);
}

console.log(maxSumCircularEff([10, -5, 5]))