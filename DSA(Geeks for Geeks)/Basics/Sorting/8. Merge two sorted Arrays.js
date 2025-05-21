// Merge two sorted arrays.

// -------------------------------
// Naive Solution:

/**
 * We will use javascript inbuilt function.
 * 
 * a = [10, 15, 30]
 * b = [2, 20]
 * res = [10, 15, 30]
 * res = [10, 15, 30, 2, 20]
 * 
 * After sorting:
 * res = [2, 10, 15, 20, 30]
 */

function merge (a, b) {
    let res = [];
    res.push(...a);
    res.push(...b);
    res.sort((a, b) => a - b);
    return res;
}

// const res = merge([100,200], [1,2,3,5,6]);
// console.log(res);

// ----------------------------------------------
// Efficient Solution

const mergeEff = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }   

    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

const res = mergeEff([100,200], [1,2,3,5,6]);
console.log(res);