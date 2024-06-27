/*
Write a function called fib which accepts a number and returns the nth number in the 
Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

/*
    if n = 4
    fib(3) + fib(2) 
    fib(2) == 1

    fib(3) == fib(2) + fib(1) == 1 + 1 = 2

    fib(3) + fib(2) = 3

*/

function fib(n) {
    if(n <= 2) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

let res = fib(6);
console.log(res);





// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }