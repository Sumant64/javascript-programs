// Check for Anagrasm

/**
 * I/P: s1 = "listen", s2 = "silent"
 * O/P: yes
 * 
 * I/P: s1 = "aaacb", s2 = "cabaa"
 * O/P: yes
 * 
 * I/P: s1 = "aab", s2 = "bab"
 * O/P: no
 * 
 */


// Naive Solution:

/**
 * Sort and then compare
 * s1 = "abaac"
 * s2 = "aacba"
 * 
 * After sorting:
 *      s1 = aaabc
 *      s2 = aaabc
 */

function areAnagram(s1, s2) {
    if(s1.length !== s2.length) {
        return false;
    }
    let s1s = s1.split("").sort().join("");
    let s2s = s2.split("").sort().join("");

    return (s1s === s2s);
}

console.log(areAnagram("listen", "silent"))


//================================================
// Efficient Solution

/**
 * Idea for the efficient solution:
 * --------------------------------
 * 
 * o Create a count array of size 256 with all values as 0.
 * o traverse the string and for finding the character at s1 increment the
 * count by 1 at its ascii index & if found at s2 then decrement the count index
 *      count[s1.charCodeAt(i)]++;
 *      count[s2.charCodeAt(i)]--;
 * o If every value of the count array remains 0, return true;
 */

function areAnagramEff(s1, s2) {
    if(s1.length !== s2.length) {
        return false;
    }

    let count = new Array(256).fill(0);

    for(let i = 0; i < s1.length; i++) {
        count[s1.charCodeAt(i)]++;
        count[s2.charCodeAt(i)]--;
    }

    for(let i = 0; i< count.length; i++) {
        if(count[i] !== 0) {
            return false;
        }
    }
    return true;
}

console.log(areAnagram("listen", "silent"))