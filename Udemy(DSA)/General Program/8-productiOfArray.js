/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60


function productOfArray(arr) {
    let total = 1;
    for(let i = 0; i< arr.length ; i++){
        console.log(arr[i]);
        total *= arr[i];
    }
    return total;
}

productOfArray([1,2,3])
