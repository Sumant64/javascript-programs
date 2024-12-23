// Sliding Window Technique 

/**
 * Ques> Find the maximum sum of k consecutive elements.
 * 
 * I/P: [1, 8, 30, -5, 20, 7]
 *      k = 3
 * O/P: 45
 * 
 * I/P: [5, -10, 6, 90, 3]
 *      k = 2
 * O/P: 96
 */

/**
 * Naive Solution:
 * o Two traversal of the array with j < k
 * 
 * Ex: [10, 5, -2, 20, 1]
 *      k = 3, res = -infinity
 * i = 0; curr = 13, res = 13
 * i = 1; curr = 23, res = 23
 * i = 2; curr = 19
 */

function maxSum (arr, k) {
    let res = Number.NEGATIVE_INFINITY;
    for(let i = 0; i+k-1 < arr.length; i++) {
        let curr = 0;
        for(let j = 0; j < k; j++) {
            curr += arr[i+j];
        }
        res = Math.max(res, curr);
    }
    return res;
}

// console.log(maxSum([1, 8, 30, -5, 20, 7], 3))

//====================================================
// Efficient Sol --> Sliding Window method

/**
 * Idea:
 * o Compute sum of current window using sum of previous window in O(1) time
 * 
 * Ex: [1, 8, 30, -5, 20, 7], k = 4
 * Initially: curr = 1+8+30-5 = 34, res = 34
 * 
 * 1st slide: 
 * 
 * [1, (8, 30, -5, 20), 7]
 * o adding last of current windown
 * o removing first of previous window
 * o curr = 34 + 20 -1 = 53, res = 53
 * 
 * 2nd slide:
 * 
 * [1, 8, (30, -5, 20, 7)]
 * curr = 53 + 7 - 8 = 52 
 */

function slidingWindow(arr, k) {
    let curr = 0;
    for(let i = 0; i < k; i++) {
        curr += arr[i]
    }

    let res = curr, n = arr.length;
    for(let i = k; i < n; i++) {
        curr += (arr[i] - arr[i - k]);
        res = Math.max(res, curr);
    }
    return res;
}

console.log(slidingWindow([1, 8, 30, -5, 20, 7], 3))