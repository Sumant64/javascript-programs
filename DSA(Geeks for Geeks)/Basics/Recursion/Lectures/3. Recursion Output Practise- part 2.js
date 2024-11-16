// Output based question

function fun(n) {
    if(n == 1) {
        return 0;
    }
    return 1 + fun(Math.floor(n/2));
}

console.log(fun(16));

/**
 * fun(16) (ans. 4)
 *      --> 1 + fun(8)  = 1 + 3 = 4
 *          --> 1 + fun(4)  = 1 + 2 = 3
 *              --> 1 + fun(2)  = 1 + 1 = 2
 *                  --> 1 + fun(1) = 1 + 0 = 1
 */

// ========================================
// Output based question

function secondFun(n) {
    if(n == 0) {
        return;
    }
    secondFun(Math.floor(n / 2));
    console.log(n % 2);
}

fun(5);

/**
 * In general: This function is used to represent the binary representation of a number.
 *  Output:
 *  1
 *  0
 *  1
 */