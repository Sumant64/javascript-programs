/*
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

Examples:

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1
*/


function binarySearch(arr, val){
    // add whatever parameters you deem necessary - good luck!
    let l, r, m;
    l = 0;
    r = arr.length - 1;
  
    while(l <= r){
          m = Math.floor((l + r) / 2);
          console.log(m);
        if(arr[m] === val){
            return m;
        }
        if(arr[m] > val){
            r = m - 1;
        }
        if(arr[m] < val){
            l = m + 1;
        }
    }
    return -1;
  }
  
  
  let res = binarySearch([1,2,3,4,5],5)
  console.log(res);