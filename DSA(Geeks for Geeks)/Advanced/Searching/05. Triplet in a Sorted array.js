// Triplet in a sorted array

/**
 * I/P: arr[] = [2, 3, 4, 8, 9, 20, 40]
 *      x = 32
 * O/P: True (Triplet 4, 8, 20)
 * 
 * I/P: arr[] = [1, 2, 5, 6]
 *      x = 14
 * O/P: False
 */

// ============================================
// Naive Solution: Generate every possible triplet and compare sum with the given sum.

function isTriplet (arr, x) {
    let n = arr.length;
    for(let i = 0; i < n - 2; i++) {
        for(let j = i + 1; j < n - 1; j++) {
            for(let k = j + 1; k < n; k++) {
                if(arr[i] + arr[j] + arr[k] === x) {
                    return true;
                }
            }
        }
    }

    return false;
}

// console.log(isTriplet([2, 3, 4, 8, 9, 20, 40], 32));


// ===========================================================
// Efficient Solution

/**
 * 1. Traverse the array from left to right.
 * 2. For every element arr[i], check if there is a pair on right side with
 * sum (x - arr[i])
 * 
 * Time: O(n^2)
 * Space: O(1)
 */

function isPair(arr, x, si) {
    let i = si, j = arr.length - 1;
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

function isTripletEff (arr, x) {
    let n = arr.length;
    for(let i = 0; i < n - 2; i++) {
        if(isPair(arr, x - arr[i], i + 1)) {
            return true;
        }
    }

    return false;
}

console.log(isTripletEff([2, 3, 4, 8, 9, 20, 40], 32));