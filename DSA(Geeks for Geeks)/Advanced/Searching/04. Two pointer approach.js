// Two pointer approach

/**
 * o Find if there is a pair with sum x in a sorted array.
 * 
 * I/P: arr[] = [2, 5, 8, 12, 30]
 *      x = 17
 * O/P: True  --> Pair in (5, 12)
 * 
 * I/P: arr[] = [3, 8, 13, 18]
 *      x = 14
 * O/P: false
 */


// =====================================
// Naive Solution

/**
 * o Generate all pairs and check for sum of every pair.
 * o Ex: [2, 3, 8, 11]
 *      x = 14
 *      i = 0; j = 1
 *              j = 2
 *              j = 3
 *              j = 2
 *              j = 3
 *          return true;
 * 
 * o Time: O(n^2)
 * Aux Space: O(1) 
 * 
 */

function isPair(arr, x) {
    let n = arr.length;
    for(let i = 0; i < n-1; i++) {
        for(let j = i + 1; j < n; j++) {
            if(arr[i] + arr[j] === x) {
                return true;
            }
        }
    }

    return false;
}

// console.log(isPair([2, 5, 8, 12, 30], 17));

// ================================================
// Efficient Solution

function isPairEff (arr, x) {
    let i = 0, j = arr.length - 1;
    while(i < j) {
        if(arr[i] + arr[j] === x) {
            return true;
        } else if(arr[i] + arr[j] < x) {
            i++;
        } else {
            j--;
        }
    }
    return false;
}

console.log(isPairEff([2, 5, 8, 12, 30], 17));