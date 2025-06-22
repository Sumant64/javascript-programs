// Longest Consecutive Subsequence in given array

/**
 * I/P: arr[] = [1, 9, 3, 4, 2, 20]
 * O/P: 4 ==> elements are 1, 2, 3, 4
 * 
 * I/P: arr[] = [8, 20, 7, 30]
 * O/P: 2
 * 
 * I/P: arr[] = [20, 30, 40]
 * O/P: 1
 */ 

/**
 * o We need to find the longest subsequence in the form of 
 * x, x + 1, x + 2, .... x + i with these elements appearing in any order.
 */

// =========================================
// Naive Solution: Use sorting (Time: O(n log n))

function findLongest(arr) {
    arr.sort((a, b) => a - b);
    let res = 1, curr = 1;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] === arr[i - 1] + 1) {
            curr++;
        } else {
            res = Math.max(res, curr);
            curr = 1;
        }
    }

    res = Math.max(res, curr);
    return res;
}

console.log(findLongest([8, 20, 7, 30]))

/**
 * Dry Run:
 * [2, 9, 4, 3, 10]
 * 
 * After sorting:
 * [2, 3, 4, 9, 10]
 * 
 * Initially: res = 1, curr = 1
 * i = 1: curr = 2
 * i = 2: curr = 3
 * i = 3: res = 3
 *        curr = 1
 * i = 4: curr = 2
 */

// =======================================================
// Efficient Solution

function findLargestEff (arr) {
    let h = new Set(arr);
    let res = 0;

    for(let i = 0; i < arr.length; i++) {
        if(h.has(arr[i] - 1) === false) {
            let curr = 1;
            while(h.has(arr[i] + curr)) {
                curr++;
            }
            res = Math.max(res, curr);
        }
    }

    return res;
}

console.log(findLargestEff([1, 9, 3, 4, 2, 20]))

