// Majority Element in Javascript

/**
 * Majority Element in an array is the elment which occurs more than n/2 times.
 * 
 * I/P: [8, 3, 4, 8, 8]
 * O/P: 8
 * 
 * I/P: [3, 7, 4, 7, 7, 5]
 * O/P: null (no majority)
 * 
 * I/P: [20, 30, 40, 50, 50, 50, 50]
 * O/P: 50
 */

// ====================================

/**
 * Naive Solution
 * o Traverse through every element and count occurances of it.
 * If the count becomes more than n/2, return it.
 * 
 * Ex: [8, 7, 6, 8, 6, 6, 6, 6]
 * i = 0, count = 2
 * i = 1, count = 1
 * i = 2, count = 5
 */

function findMajority(arr) {
    for(let i = 0; i < arr.length; i++) {
        let count = 1;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                count++;
            }
        }
        if(count > (arr.length)/2) {
            return arr[i];
        }
    }
    return null
}

// console.log(findMajority([8, 7, 6, 8, 6, 6, 6, 6]));

// =============================================
// Efficient solution: Moore's Voting Algorithm

/**
 * Efficient Solution:
 * o First assume that majority element exists in the given array.
 * o If an element is majority, then it will at the end even,
 * if every other elements votes against it.
 * 
 * [10, 10, 10, 6, 8]
 *  +1  +1  +1  -1 -1
 * sum = 1 + 1 + 1 -1 -1 = 1
 * 
 * 
 * [8, 8, 6, 6, 6, 6]
 * +1 +1 -1 -1 +1 +1
 * 
 * [6, 8, 7, 6, 6]
 * +1 -1 +1 -1 +1
 * 
 */

function findMajorityEff (arr) {
    let res = arr[0], votes = 1;

    //Find the candidate
    for(let i = 1; i < arr.length; i++) {
        if(votes === 0) {
            res = arr[i];
            votes = 1;
        } else if(res === arr[i]) {
            votes++
        } else {
            votes--;
        }
    }

    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === res) {
            count++;
        }
    }
    if(count > (arr.length/2)) {return res;}
    else {return null;}
}

console.log(findMajority([3, 7, 4, 7, 7, 5]))