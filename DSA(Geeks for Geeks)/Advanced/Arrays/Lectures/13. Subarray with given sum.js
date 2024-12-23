// Subarray with given sum

//Requirement: There are no negative elements in the array.

/**
 * I/P: [1, 4, 20, 3, 10, 5]
 *      sum = 33
 * O/P: yes
 * 
 * I/P: [1, 4, 0, 0, 3, 10, 5]
 *      sum = 7
 * O/P: yes
 * 
 * I/P: [2, 4]
 *      sum = 3
 * O/P: No
 */

/**
 * Naive Solution:
 * o traverse through the array two times and check for the sum
 */

const subarray = (arr, sum) => {
    for(let i = 0; i < arr.length; i++) {
        let curr = 0;
        for(let j = i; j < arr.length; j++) {
            curr += arr[j];
            if(curr === sum) {
                return true;
            }
        }
    }
    return false;
}

// console.log(subarray([1, 4, 20, 3, 10, 5], 33));


// =====================================================
// Efficient Method: Use the Window sliding technique with a window of variable size.


/**
 * Ex: [1, 4, 20, 3, 10, 5]
 * sum = 33
 * 
 * o While curr is smaller than sum, extend the window by increasing e.
 * s = 0, e = 0, curr = 1
 * s = 0, e = 1, curr = 5
 * s = 0, e = 2, curr = 25
 * s = 0, e = 3, curr = 28
 * s = 0, e = 4, curr = 38
 * 
 * o While curr is greater, shrink the window by increasing s
 * s = 1, e = 4, curr = 37
 * s = 2, e = 4, curr = 33
 */

function isSubSum(arr, sum) {
    let s = 0, curr = 0;
    for(let e= 0; e < arr.length; e++){
        curr += arr[e];
        while(sum < curr) {
            curr -= arr[s];
            s++;
        }
        if(curr === sum) {
            return true;
        }
    }
    return false;
}

console.log(isSubSum([1, 4, 20, 3, 10, 5], 33))