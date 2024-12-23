// Prefix Sum

/**
 * Ques> Given a fixed array and multiple range sum queries,
 * how to answer the queries efficiently.
 * 
 * I/P: arr[] = [2, 8, 3, 9, 6, 5, 4]
 *      Queries: getSum(0, 2) --> (start index, end index)
 *               getSum(1, 3)
 *               getSum(2, 6)
 * O/P: 13  20  27
 * 
 */

/**
 * Naive Solution:
 * o Traverse the array and find the sum.
 */

let arr = [2, 8, 3, 9, 6, 5, 4]

function getSum(start, end) {
    let res = 0;
    for(let i = start; i <= end; i++) {
        res += arr[i];
    }
    return res;
}

// console.log(getSum(0, 2));
// console.log(getSum(1, 3));

// ======================================
// Efficient Solution: Using Prefix Sum

/**
 * Prefix sum
 * Ex arr = [2, 8, 3, 9, 6, 5, 4]
 * 
 * o Precompute prefixSum Array
 *  pSum = [2, 10, 13, 22, 28, 33, 37]
 *  pSum[i] = summation from 0 to i of arr[i]
 * 
 * o getSum(l, r) ==> pSum[r] if l == 0
 *                ==> pSum[r] - pSum[l - 1] Otherwise
 * 
 * getSum(0, 2) = pSum[2] = 13
 * getSum(1, 3) = pSum[3] - pSum[0] = 22 - 2 = 20
 * 
 */

function preFixSum(arr) {
    let n = arr.length;
    let pSum = new Array(n);
    pSum[0] = arr[0];
    for(let i = 1; i < n; i++) {
        pSum[i] = pSum[i - 1] + arr[i];
    }

    return function(l, r) {
        if(l === 0) {
            return pSum[r];
        } else {
            return pSum[r] - pSum[l - 1];
        }
    }
}


const obj = preFixSum([2, 8, 3, 9, 6, 5, 4]);

console.time("6")
console.log(obj(0, 2))
console.timeEnd("6")

console.time("7")
console.log(obj(1, 3));
console.timeEnd("7")

console.time("8")
console.log(obj(1, 6));
console.timeEnd("8")
