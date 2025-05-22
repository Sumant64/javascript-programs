// Palindrome check

/**
 * I/P: str = "ABCDCBA"
 * O/P: yes
 * 
 * I/P: str = "ABBA"
 * O/P: yes
 * 
 * I/P: str = "geeksforgeeks"
 * O/P: No
 */

// Naive Method
/**
 * Time: theta(n)
 * Aux space: theta(n)
 */

function isPal(s) {
    let r = s.split("").reverse().join("");
    return (r === s);
}

console.log(isPal("ABCB"))

// ============================================
/**
 * Efficient Solution.
 * -------------------
 * 
 */

function isPal(s) {
    let begin = 0;
    let end = s.length - 1;
    while(begin < end) {
        if(s[begin] !== s[end]) {
            return false;
        }
        begin++;
        end--;
    }
    return true;
}

console.log(isPal("abcba"))