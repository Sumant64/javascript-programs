// Palindrome check
/**
 * I/P: abbcbba
 * O/P: Yes
 * 
 * I/P: abba
 * O/P: Yes
 * 
 * I/P: geeks
 * O/P: No
 */

//===============================
// Program
/**
 * Idea:
 * We will check the first and the end character, and if it is true we will go for second and second last.
 * and so on till we will reach the middle character. For even there will be no middle character,
 * and for odd there will be one middle character
 */


function isPal(s, start, end) {
    if(start >= end) {
        return true;
    }
    return ((s[start] === s[end]) && isPal(s, start + 1, end - 1));
}

console.log(isPal("acbca", 0, 4));