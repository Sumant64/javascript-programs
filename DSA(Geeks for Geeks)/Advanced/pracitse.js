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

const slidingWindow = (arr, k) => {
    let res = 0, currMax = 0;

    for(let i = 0; i < k; i++) {
        res += arr[i];
        currMax += arr[i];
    }

    for(let i = k; i < arr.length; i++) {
        currMax += (arr[i] - arr[i - k]);
        res = Math.max(currMax, res);
    }

    return res;
}

console.log(slidingWindow([1, 8, 30, -5, 20, 7], 3));