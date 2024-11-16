// Output based question

function fun(n) {
    if(n == 0) {
        return;
    }
    console.log(n);
    fun(n - 1);
    console.log(n);
}

fun(3);

/**
 * --> Output
 *      3
 *      2
 *      1
 *      1
 *      2
 *      3
 */

// =============================================
// Output based question

function secondFun (n) {
    if(n == 0) {
        return;
    }
    fun(n - 1);
    console.log(n);
    fun(n - 1);
}

secondFun(3);

/**
 * --> Output
 *      1
 *      2
 *      1
 *      3
 *      1
 *      2
 *      1
 */