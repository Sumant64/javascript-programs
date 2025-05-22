// Check if a string is subsequence of other

/**
 * I/P: s1 = "ABCD"
 *      s2 = "AD"
 * O/P: true
 * 
 * I/P: s1 = "ABCDE"
 *      s2 = "AED"
 * O/P: false
 * 
 * o All subsequences of "ABC" are:
 * "", "A", "B", "C", "AB", "BC", "AC", 'ABC'
 * O No of substring: 2^n
*/

/**
 * Idea for the solution:
 *      i
 * s1 = GEEKSFORGEEKS
 * s2 = GRGES
 *      j
 * 
 * if(s1[i] === s2[j]) {i++; j++;};
 * else {i++;}
 */

// iterative solution
function isSubSeq(s1, s2) {
    let j = 0;
    for(let i = 0; i < s1.length && j < s2.length; i++) {
        if(s1[i] === s2[j]) {
            j++;
        }
    }
    return (j === s2.length);
}

console.log(isSubSeq("ABC", "AC", 3, 2));

//=======================================
// Recursive Solution

function isSubSeqRec (s1, s2, m, n) {
    if(n === 0) {return true}
    if(m === 0) {return false}
    if(s1[m-1] === s2[n-1]) {
        return isSubSeq(s1, s2, m-1, n-1);
    } else {
        return isSubSeq(s1, s2, m-1, n);
    }
}

console.log(isSubSeqRec("ABC", "AC", 3, 2));