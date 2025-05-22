// Left rotate an array by D places

/**
 * I/P: arr = [1, 2, 3, 4, 5]
 * d = 2
 * O/P: arr = [3, 4, 5, 1, 2]
 * 
 * I/P: arr = [10, 35, 20, 15]
 * d = 3
 * O/P: arr = [15, 10, 35, 10]
 */

// Naive Solution
/**
 * Do the following d times
 * leftRotateByOne(arr)
 */

// ====================================

// Better Solution

function leftRotate(arr, d) {
    let temp = [];
    for(let i = 0; i < d; i++) {
        temp[i] = arr[i];
    }

    for(let i = d; i < arr.length; i++) {
        arr[i - d] = arr[i];
    }

    for(let i = 0; i < d; i++) {
        arr[arr.length - d + i] = temp[i];
    }

    return arr;
}

console.log(leftRotate([1, 2, 3, 4, 5], 2))

//================================================

//Reversal Algorithm

function reverse(arr, l, r) {
    while(l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }
}

function reveralAlgo (arr, d) {
    let n = arr.length;
    reverse(arr, 0, d - 1);
    reverse(arr, d, n-1);
    reverse(arr, 0, n - 1);
    return arr;
}

console.log(reveralAlgo([1, 2, 3, 4, 5], 2))