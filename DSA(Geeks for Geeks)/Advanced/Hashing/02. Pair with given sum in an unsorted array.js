// Pair with Given Sum in an unsorted array

/**
 * I/P: arr[] = [3, 2, 8, 15, -8]
 *      sum = 17
 * O/P: True
 * 
 * I/P: arr[] = [2, 1, 6, 3]
 *      sum = 6
 * O/P: False
 * 
 * I/P: arr[] = [5, 8, -3, 6]
 *      sum = 3
 * O/P: True
 */

/**
 * o Naive Approach: Consider Every Pair (Time: O(n^2))
 * o Better Approach: Sorting , then two pointer approach (Time: O(nlog n))
 * o Efficient Approach: using hashing (Time: O(n log n);; Space: O(n))
 */

// ==========================================
// Efficient Approach

function isPairSum (arr, sum) {
    let s = new Set();
    for(let i = 0; i < arr.length; i++) {
        if(s.has(sum - arr[i])) {
            return true;
        }
        s.add(arr[i]);
    }
    return false;
}

console.log(isPairSum([10, 15, 9, 7, 5], 17));
