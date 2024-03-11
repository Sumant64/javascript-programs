/*
Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the 
callback. Otherwise it returns false.
*/

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callfun){
    // add whatever parameters you deem necessary - good luck!
    let isOddCheck = false;
    for (let i=0; i<arr.length; i++){
        let checkVal = callfun(arr[i]);
        if(checkVal == true){
            isOddCheck = true;
            break;
        }
    }
    return isOddCheck;
    
  }
  
  const isOdd = val => val % 2 !== 0;
  let check = someRecursive([2,4], isOdd);
  console.log(check);