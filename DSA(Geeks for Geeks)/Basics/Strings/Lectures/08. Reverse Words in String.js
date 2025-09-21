// Reverse Words In a String

/**
 * I/P: str = "Welcome to gfg"
 * O/P: str = "gfg to Welcome"
 * 
 * I/P: str = "I love coding"
 * O/P: str = "coding love I"
 * 
 * I/P: str = "abc"
 * O/P: str = "abc"
 */

/**
 * Naive Method:
 * ------------
 * 1. Create a Stack
 * 
 * 2. One by one push words into the stack.
 *      | gfg  |
 *      | to   |
 *      | Welcome |
 * 
 * 3. Pop words one by one and build the required string.
 * 'gfg to welcome'
 */

// ======================================================
// Efficient Solution:

/**
 * Idea for the efficient solution:
 * ex. "abc bcd ef"
 * 1. Reverse the individual words
 *      "cba dcb fe"
 * 
 * 2. Reverse the whole string
 *      "ef bcd abc"
 * 
 */

function reverse (s, l, h) {
    let arr = s.split('');
    while(l <= h) {
        [arr[l], arr[h]] = [arr[h], arr[l]];
        l++;
        h--;
    }

    s = arr.join('');
    return s;
}


function reverseWords (s) {
    let n = s.length, start = 0;
    for(let end = 0; end < n; end++) {
        if(s[end] === ' ') {
            s = reverse(s, start, end - 1);
            start = end + 1;
        }
    }

    s = reverse(s, start, n - 1); // for the reverse of last word

    return reverse(s, 0, n - 1); // for again reverse the entire string.
}

console.log(reverseWords("I love coding"));