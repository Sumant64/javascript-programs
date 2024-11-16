// Print 1 to N using Recursion

function printN(n) {
    if(n == 0) {
        return;
    }
    printN(n - 1);
    console.log(n);
}

printN(5);