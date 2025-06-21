// Subarray with Zero Sum

/**
 * I/P: arr[] = [1, 4, 13, -3, -10, 5]
 * O/P: Yes
 * 
 * I/P: arr[] = [-1, 4, -3, 5, 1]
 * O/P: Yes
 * 
 * I/P: arr[] = [3, 1, -2, 5, 6]
 * O/P: No
 * 
 * I/P: arr[] = [5, 6, 0, 8]
 * O/P: Yes
 */

// =======================================
// Naive Solution : 

/**
 * O Compute sum of every subarray and check for 0. It will work for other sum also.
 * o Time: O(n^2)
 * o Aux Space: O(1)
 */

const subArrayZeroSum = (arr, sum) => {
    for(let i = 0; i < arr.length; i++) {
        let currSum = 0;
        for(let j = i; j < arr.length; j++) {
            currSum += arr[j];
            if(currSum === sum) {
                return true;
            }
        }
    }
    return false;
}

console.log(subArrayZeroSum([10, 20, 5, 3, 8], 15))
console.log(subArrayZeroSum([1, 4, 13, -3, -10, 5], 0))

// =====================================================
// Efficient Solution: Using Set()

function isSubArrSumZero(arr) {
    let s = new Set();
    let preSum = 0;
    for(let i = 0; i < arr.length; i++) {
        preSum += arr[i];
        if(s.has(preSum)) {
            return true;
        }
        if(preSum === 0) {
            return true;
        }
        s.add(preSum);
    }

    return false;
}


console.log(isSubArrSumZero([1, 4, 13, -3, -10, 5]));

