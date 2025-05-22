// LCM of two numbers
/**
 * I/P: a = 4, b = 6
 * O/P: 12
 * 
 * I/P: a = 12, b = 15
 * O/P: 60
 * 
 * I/P: a = 2, b = 8
 * O/P: 8
 * 
 * I/P: a = 3, b = 7
 * O/P: 21
 * 
 */
//================================

// Naive solution
/**
 * 1. The smallest possible value of lcm is max(a, b)
 * 2. We begin with max(a, b) and keep increasing until we reach a number that is divisible by both a and b
 * 
 * Time Complexity: O(a * b - max(a, b))
 */

function myLCM(a, b) {
    let res = Math.max(a, b);
    while(true) {
        if(res % a === 0 && res % b === 0) {
            return res;
        }
        res++;
    }
}

//================================

//Efficient Solution
/**
 *  a * b = gcd(a, b) * lcm(a, b)
 * Time complexity --> O(log min(a, b))
 */

function myLCMEff(a, b) {
    return (a * b) / gcd(a, b);
}

function gcd(a, b) {

}