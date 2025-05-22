// Count the trailing zeros of the factorial of a number
/**
 * I/P: n = 5 --> 5 x 4 x 3 x 2 x 1 = 120 (one zero)
 * O/P: 1
 * 
 * I/P: n = 10
 * O/P: 2
 * 
 * I/P: n = 100
 * O/P: 24
 * 
 * Idea:
 * -----
 * (1 x 2 x 3 x 4 x 5 x 6 x 7 x 8 x 9 x 10 x.... x 25 )
 * We will divide the no with 5, 25, 125...
 * Tailing zeros count = (n / 5) + (n / 25) + (n / 125) + ....
 */

function countZerosFact(n) {
    let res = 0;
    for(let i = 5; i <= n; i = i * 5) {
        res = res + Math.floor(n / i);
    }
    return res;
}

console.log(countZerosFact(10));