/**
 * Two sum -Pairs with 0 Sum
Difficulty: EasyAccuracy: 31.49%Submissions: 474K+Points: 2Average Time: 20m
Given an integer array arr, return all the unique pairs [arr[i], arr[j]] such that i != j and arr[i] + arr[j] == 0.

Note: The pairs must be returned in sorted order, the solution array should also be sorted, and the answer must not contain any duplicate pairs.

Examples:

Input: arr = [-1, 0, 1, 2, -1, -4]
Output: [[-1, 1]]
Explanation: arr[0] + arr[2] = (-1)+ 1 = 0.
arr[2] + arr[4] = 1 + (-1) = 0.
The distinct pair are [-1,1].
Input: arr = [6, 1, 8, 0, 4, -9, -1, -10, -6, -5]
Output: [[-6, 6],[-1, 1]]
Explanation: The distinct pairs are [-1, 1] and [-6, 6].
Expected Time Complexity: O(n log n)
Expected Auxiliary Space: O(n).

Constraints:
3 <= arr.size <= 105
-105 <= arr[i] <= 105

Company Tags
FlipkartAccoliteAmazonFactSetHikeMakeMyTripGoldman SachsAdobeSalesforce
 */

/**
 * @param {number[]} arr
 * @returns {number[][]}
 */
class Solution {
    getPairs(arr) {
        // code here
        let start = 0;
        let end = arr.length - 1;
        arr.sort((a, b) => a - b);
        let res = []
        let obj = {}
        
        while(start < end) {
            let sum = arr[start] + arr[end];
            if(sum === 0) {
                if(obj[arr[start]] !== 1) {
                    res.push([arr[start], arr[end]])
                    obj[arr[start]] = 1
                }
                start++;
                end--;
            } else if(sum > 0) {
                end--;
            } else {
                start++;
            }
        }
        return res;
        
    }
}

const obj = new Solution();
console.log(obj.getPairs([6, 1, 8, 0, 4, -9, -1, -10, -6, -5]))

//============================================================