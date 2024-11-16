/*
Question:
---------
Write a function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of 
each string in the array.
*/

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


function capitalizeFirst(arr) {
    let capitalizeArr = [];
    for (let i = 0; i< arr.length; i++){
        let word = arr[i];
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizeArr.push(capitalizedWord);
    }
    return capitalizeArr;
}

let words = ["apple", "banana", "cherry"];
let capitalizedWords = capitalizeFirst(words);
console.log(capitalizedWords)

