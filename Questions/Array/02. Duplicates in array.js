/**
 * Array Duplicates
Difficulty: EasyAccuracy: 18.95%Submissions: 812K+Points: 2Average Time: 20m
Given an array arr of integers, find all the elements that occur more than once in the array. If no element repeats, return an empty array.

Examples:

Input: arr[] = [2, 3, 1, 2, 3]
Output: [2, 3] 
Explanation: 2 and 3 occur more than once in the given array.
Input: arr[] = [0, 3, 1, 2] 
Output: [] 
Explanation: There is no repeating element in the array, so the output is empty.
Input: arr[] = [2]
Output: [] 
Explanation: There is single element in the array. Therefore output is empty.
Constraints:
1 <= arr.size() <= 106
0 <= arr[i] <= 106

Company Tags
PaytmZohoFlipkartAmazonD-E-ShawQualcomm
 */

class Solution {
    findDuplicates(arr) {
        // code here
        let dup = [];
        let obj = {};
        
        for(let i = 0; i < arr.length; i++) {
            obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
        }
        
        for(let i in obj) {
            if((obj[i]) > 1) {
                dup.push(parseInt(i))
            }
        }
        
        return dup
    }
}