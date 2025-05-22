// Reverse an array

/**
 * I/P: arr = [10, 5, 7, 30]
 * O/P: arr = [30, 7, 5, 10]
 * 
 * I/P: arr = [30, 20, 10]
 * O/P: arr = [10, 20, 30]
 * 
 * I/P: arr = [10]
 * O/P: arr = [10]
 */

// ================================
// Naive Solution
/**
 * 1. Create a temp array
 *      temp = []
 * 2. Traverse the input array from right to left and append elements to temp.
 *      temp = [30, 20, 10]
 * 
 * 3. Copy temp elements back to arr.
 *      arr = [30, 20, 10]
 * 
 * --> Time complexity: O(n)
 * --> Space complexity: O(n)
 */

// ==================================
// Efficient Solution

function reverseArr(arr) {
    let low = 0;
    let high = arr.length - 1;
    while(low < high) {
        [arr[low], arr[high]] = [arr[high], arr[low]];
        low++;
        high--;
    }
    return arr;
}

console.log(reverseArr([10, 5, 3]))