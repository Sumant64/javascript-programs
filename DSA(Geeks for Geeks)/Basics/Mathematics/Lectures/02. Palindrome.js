// check whether the number is palindrome
/**
 * Palindrome number are the numbers whose reverse is the number itself
 * 
 * I/P: n = 78987
 * O/P: yes
 * 
 * I/P: n = 8668
 * O/P: yes
 * 
 * I/P: n = 8
 * O/P: yes
 * 
 * I/P: n = 21
 * O/P: no
 * 
 * Idea: We will reverse the number and check with the given number
 */

function isPal(n) {
    let rev = 0, temp = n;
    while(temp !== 0) {
        let ld = temp % 10;
        rev = rev * 10 + ld;
        temp = Math.floor(temp / 10);
    }
    return (rev === n);
}

console.log(isPal(32));