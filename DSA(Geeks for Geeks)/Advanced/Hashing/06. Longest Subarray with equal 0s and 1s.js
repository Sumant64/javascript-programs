// Longest Subarray with equal 0s and 1s

/**
 * I/P: arr[] = [1, 0, 1, 1, 1, 0, 0]
 * O/P: 6
 * 
 * I/P: arr[] = [1, 1, 1, 1]
 * O/P: 0 => no 0 in the array.
 * 
 * I/P: arr[] = [0, 0, 1, 1, 1, 1, 1, 0]
 * O/P: 4 => [0, 0, 1, 1]
 * 
 * I/P: arr[] = [0, 0, 1, 0, 1, 1]
 * O/P: 6 => entire arr has 3 zero and 3 ones.
 */

// ===========================================
// Naive Solution

function longestSub(arr) {
    let n = arr.length;
    let res = 0;

    for(let i = 0; i < n; i++) {
        let c0 = 0, c1 = 0; // count of 0s and 1s
        for(let j = i; j < n; j++) {
            if(arr[j] === 0) {
                c0++;
            }
            if(arr[j] === 1) {
                c1++;
            }
            if(c0 === c1) {
                res = Math.max(res, c0 + c1); 
            }
        }
    }
    return res;
}

console.log(longestSub([1, 0, 1, 1, 1, 0, 0]));

// ==================================================
// Efficient Solution

/**
 * 1. Replace every 0 with -1
 *      [1, 0, 1, 1, 1, 0, 0]
 *  
 *  for(let i = 0; i < arr.length; i++) {
 *      if(arr[i] === 0) {
 *          arr[i] = -1;
 *      }
 * }
 * 
 *      [1, -1, 1, 1, 1, -1, -1] => After the above loop
 * 
 * 2. Call the function to find length of the longest subarray with 0 sum
 * This function has been discussed before.
 */

function maxlenEff(arr, sum) {
    // chage 0 to -1
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            arr[i] = -1;
        }
    }


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

console.log(maxlenEff([0, 0, 1, 1, 1, 1, 1, 0], 0));
