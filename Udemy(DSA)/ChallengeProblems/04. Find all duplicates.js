/**
 * 
Frequency Counter - findAllDuplicates
Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
Time Complexity - O(n)
 */


function findAllDuplicates(arr){
    // add whatever parameters you deem necessary - good luck!
    let res = [];
    arr = arr.sort((a, b) => a - b);
   
    let i = 0;
    while(i < arr.length) {
        let j = i + 1;
        let count = 1;
        while(j < arr.length) {
            if(arr[i] === arr[j]) {
                j++;
                count++;
            } else {
                break;
            }
        }
        if(count > 1) res.push(arr[i]);
        i = j
    }
    
    return res;
    
  }
  
  console.log(findAllDuplicates([4, 3, 2, 1, 0]))