// Square root

/**
 * I/P: x = 4
 * O/P: 2
 * 
 * I/P: x = 14
 * O/P: 3
 * 
 * I/P: x = 25
 * O/P: 5
 */

//===============================
// Naive Solution

function sqRootFloor(x) {
    let i = 1;
    while(i * i <= x) {
        i++;
    }
    return (i - 1);
}

// console.log(sqRootFloor(25))

//========================================
// efficient solution using binary search

/**
 * Idea for the log n solution
 * o We do binary search in the range from 1 to x.
 * x = 10, low = 1, high = 10, mid = 5
 * 
 * Case 1: mid * mid === x, return mid
 * Case 2: mid * mid < x, low = mid + 1
 * Case 3: mid * mid > x, high = mid -1
 */

function sqRootFlorr(x) {
    let low = 1, high = x, res = 1;
    
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(mid * mid === x) {
            return mid;
        } else if(mid * mid > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
            res = mid;
        }
    }
    return res;
}

console.log(sqRootFlorr(25))