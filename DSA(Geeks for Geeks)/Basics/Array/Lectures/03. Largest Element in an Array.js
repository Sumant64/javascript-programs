// Largest Element in an array

/**
 * I/P: arr = [10, 5, 20, 8]
 * O/P: 2 // Index of 20
 * 
 * I/P: arr = [30]
 * O/P: 0 // Index of 30
 * 
 * I/P: arr = [20, 8, 40, 10, 40]
 * O/P: 2 // Index of first 40
 */
//======================================

// Method 1
/**
 * Idea:
 * arr = [5, 20, 40, 10];
 * flag = true;
 * for loop (i) for the first traversal:
 *      for loop (j) for the second traversal:
 *          o check each element of j, if it has bigger element then flag = false and then break the loop
 *          o similarly will will check for each element of (i), if (i > j) then flag will remain true. and return
 */

function findMax(arr) {
    for(let i = 0; i < arr.length; i++) {
        let flag = true;
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                flag = false;
                break;
            }
        }
        if(flag === true) {
            return i;
        }
    }
    return -1;
}

console.log(findMax([4, 20, 40, 10]));

// ==============================================
//Effient Method
/**
 * Idea:
 * make one traversal to the array and check if the previous element in smaller than the 
 * next, then mark next elment and largest and traverse with the same process till end 
 * and return the element.
 */

function findMaxEff(arr) {
    let res = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[res]) {
            res = i;
        }
    }
    return res;
}

console.log(findMaxEff([4, 20, 40, 10]));