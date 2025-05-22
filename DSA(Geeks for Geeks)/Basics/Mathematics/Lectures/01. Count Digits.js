// Count how many digits a integer have
/**
 * I/P: x = 9235
 * O/P: 4
 * 
 * I/P: x = 38
 * O/P: 2
 * 
 * I/P: x = 7
 * O/P: 1
 * 
 * Idea:
 * We gonna remove last digit of the number one by one. And then count everytime by 1 till x becomes 0.
 * x=Math.floor(x/10) removes the last digit of x
 * 
 * Time Complexity: theta of d --> where d is the no of digits in the given no.
 */

function countDigit(n) {
    if(n === 0) return 1;
    let count = 0;
    while(n !== 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

const n = 23234323;
console.log(countDigit(n));

