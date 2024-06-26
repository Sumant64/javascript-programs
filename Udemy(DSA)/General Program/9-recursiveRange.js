/*
Write a function called recursiveRange which accepts a number and adds up all
 the numbers from 0 to the number passed to the function 
*/

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
 }
 
 let sum = recursiveRange(5);
 console.log(sum);