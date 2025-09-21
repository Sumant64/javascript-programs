// Leftmost Non-repeating element

/**
 * Idea for the solution:
 * o 
 * EX: abcdabc
 * 
 * o We will make the 256 elements array and fill with -1 initally.
 * o We will loop through the string:
 *      o If the repeating characters appears, then mark as -2
 *      o Otherwise mark the index of the character
 *      o Then loop again and see that which character value !== -1 and !== -2 
 */

class Solution {

    nonRepeatingChar(s) {
        let visited = new Array(256).fill(-1);

        for(let i = 0; i < s.length; i++) {
            if(visited[s.charCodeAt(i)] === -1) {
                visited[s.charCodeAt(i)] = i;

            } else {
                visited[s.charCodeAt(i)] = -2;
            }
        }

        for(let i = 0; i < s.length; i++) {
            if(visited[s.charCodeAt(i)] !== -2 && visited[s.charCodeAt(i)] !== -1) {
                return i;
            }
        }

        return -1;
    }
}

let obj = new Solution();
console.log(obj.nonRepeatingChar('eeksforeeks'));