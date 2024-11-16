// Sum of digits using recursion

/**
 * Idea:
 * Hint: n % 10 gives you the last digit
 * n = Math.floor(n / 10) removes the last digit.
 * 
 * Call stack:
 * getSum(253)
 *      --> getSum(25) + 3
 *          --> getSum(2) + 5
 *              --> getSum(0) + 2
 */

function getSum(n) {
    if(n == 0) {
        return 0;
    }
    let ld = n % 10;
    n = Math.floor(n / 10);
    return getSum(n) + ld;
}

console.log(getSum(25));

