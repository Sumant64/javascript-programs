/*
Write a function called fib which accepts a number and returns the nth number in the 
Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465


function fib(num){
    // add whatever parameters you deem necessary - good luck! 
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    for(let i=1; i<num; i++){
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return nextTerm;
  }
  
  let sum = fib(10);
  console.log(sum);