// Print n to 1 using recursion
/**
 * I/P: n = 5
 * O/P: 5 4 3 2 1
 * 
 * I/P: n = 2
 * O/P: 2 1
 * 
 * n >= 1
 */

function printN(n) {
    if(n == 0) {
        return;
    }
    console.log(n);
    printN(n-1);
}

printN(5);
