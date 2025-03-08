/**
 * 
 * Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 */

function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    let flag = true;
    let str1 = num1.toString();
    let str2 = num2.toString();
    console.log(str1, str2);
    if(str1.length !== str2.length) return false;
    
    let obj = {};
    for(let i = 0; i < str1.length; i++) {
        obj[str1[i]] = obj[str1[i]] ? obj[str1[i]] + 1 : 1;
    }
   
    for(let i = 0; i < str2.length; i++) {
        obj[str2[i]] = obj[str2[i]] ? obj[str2[i]] - 1 : 1;
    }
    
    // console.log(obj);

    Object.keys(obj).map((item) => {
        // console.log(obj[item] !== 0)
        if(obj[item] !== 0 ) {
            console.log("entered false")
            flag = false;
        };
    })
    return flag;
    
  }
  
  console.log(sameFrequency(578, 589))