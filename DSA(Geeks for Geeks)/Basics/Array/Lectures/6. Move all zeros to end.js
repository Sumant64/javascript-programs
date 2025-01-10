// Move all zeros to end in array

/**
 * I/P: arr = [8, 0, 5, 0, 0, 7]
 * O/P: arr = [8, 5, 7, 0, 0, 0]
 * 
 * I/P: arr = [0, 0, 9, 0]
 * O/P: arr = [9, 0, 0, 0]
 * 
 * I/P: arr = [10, 20]
 * O/P: arr = [10, 20]
 */

// ======================================
// Naive Solution

/**
 * Ex: [10, 0, 0, 7, 8, 0]
 * 
 * Whenever we see a 0, we swap it with first non-zero element after it.
 * 
 * Ist: [10, 0, 0, 7, 8, 0]
 * 2nd: [10, 7, 0, 0, 8, 0]
 * 3rd: [10, 7, 8, 0, 0, 0]
 * 4th: [10, 7, 8, 0, 0, 0]
 * 5th: [10, 7, 8, 0, 0, 0]
 * 6th: [10, 7, 8, 0, 0, 0]
 */

function moveZeroToEnd(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[j] !== 0) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    break;
                }
            }
        }
    }
    return arr;
}

// console.log(moveZeroToEnd([10, 0, 0, 7, 8, 0]))

// -------------------------------------------------------
// Efficient Solution

/**
 * Idea for efficient solution:
 * 
 * [a0, a1, .... a (i -1) | ai .... a (n-1)]
 * Say we have fixed from a0 to a(i - 1)
 * Two cases arise for ai
 * ai = 0 --> Ignore
 * ai != 0 --> We count non-zero elements seen so far, and swap it with arr[count]
 */

function moveZeros(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            [arr[i], arr[count]] = [arr[count], arr[i]];
            count++;
        }
    }
    return arr;
}

console.log(moveZeros([10, 0, 0, 7, 8, 0]))