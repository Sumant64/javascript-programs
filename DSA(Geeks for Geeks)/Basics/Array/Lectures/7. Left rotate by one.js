// Left rotate by One

/**
 * I/P: arr = [1, 2, 3, 4, 5]
 * O/P: arr = [2, 3, 4, 5, 1]
 * 
 * I/P: arr = [30, 5, 20]
 * O/P: arr = [5, 20, 30]
 * 
 * I/P: arr = [10]
 * O/P: arr = [10]
 */

//=======================================
// Naive Solution

/**
 * 1. Create a temp array.
 * 2. Starting from second element of our input array, one by one 
 * append elements to temp.
 * 3. Append the first element of the input array to temp.
 */

// =======================================
// Efficient Solution

/**
 * 1. Store first element:
 *      x = arr[0]
 * 2. Starting from second element move every element one position back:
 *      arr[i - 1] = arr[i]
 * 3. Append x to the end
 *      arr[n - 1] = x
 */

function leftRotate(arr) {
    let x = arr[0];
    for(let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = x;
    return arr;
}

console.log(leftRotate([1, 2, 3, 4, 5]))