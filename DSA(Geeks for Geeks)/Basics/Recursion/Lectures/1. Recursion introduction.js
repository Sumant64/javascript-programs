// Introduction to recursion
/**
 * Normal Function flow
 */

function fun1 () {
    console.log("fun1() called");
}

function fun2() {
    console.log("Before fun1()");
    fun1();
    console.log("After fun1()");
}

console.log("Before fun2()");
fun2();
console.log("AFter fun2()");

/**
 * Output of the above program:
 * Before fun2()
 * Before fun1()
 * fun1() called
 * After fun1()
 * After fun2()
 */

//================================================
// Recursion
/**
 * Recursion: A function calls itself directly or indirectly
 * 
 * Ex:
 * 1. Direct
 * function fun1() {
 * ---------
 * fun1();
 * - - - - 
 * }
 * 
 * We will always see direct recursion
 */

// Program to print the output
function fun() {
    console.log("GfG");
    fun();
}
fun();

// the above program will run infinite time till the system crash. as it will never terminates. We need to write base case to terminate it.
//======================================================
// The correct above program

function funImproved(n) {
    if(n <= 0) {
        return 
    }
    console.log("GFG");
    fun(n - 1);
}

funImproved(3);

//===========================================================
// Typical Structure of Recursive Function

/**
 * function fun() {
 *      Base Cases
 *      - - - - - - - 
 *      - - - - - - -
 *      Recursive call for values that move toward a base case.
 *      - - - - - - -
 *      - - - - - - -
 * }
 */