// Leftmost repeating character

/**
 * I/P: s = "geeksforgeeks"
 * O/P: 0 (g is the leftmost repeating character)
 * 
 * I/P: s = "abbcc"
 * O/P: 1 // Index of 'b'
 * 
 * I/P: s = "abcd"
 * O/P: -1
 */

// Naive Approach
/**
 * Traverse through every character and check if it appears again later.
 * 
 * "abcbc"
 * for loop(i to arr.length - 1){
 *  for loop(j = i + 1 to arr.length - 1) {
 *      check if "a" appears after that or not
 * }
 * }
 */

// ==================================
// Better Solution.

/**
 * Better Approach
 * The idea is to use a count array and use character's ASCII values as index of the count array.
 * o Traverse the string and build a count array.
 * o Traverse the string again and return index of the character having count more than 1.
 * o 
 * 
 * s = "abccbd"
 * count =[0, 0, ....., 1(a 97), 2(b), 2(c), 1(d)]
 */

function leftMost(s) {
    let count = new Array(256).fill(0);
    for(let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i)]++;
    }
    for(let i = 0; i < s.length; i++) {
        if(count[s.charCodeAt(i)] > 1) {
            return i;
        }
    }

    return -1;
}

console.log(leftMost("geeksforeeks"))

// =======================================================
// Efficient Solution

/**
 * 
 */