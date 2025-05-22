/*
Question:
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalize(arr) {
    let capitalizeArr = [];
    for (let i = 0; i< arr.length; i++){
        let word = arr[i];
        let capitalizedWord = word.toUpperCase()
        capitalizeArr.push(capitalizedWord);
    }
    return capitalizeArr;
}

let words = ["apple", "banana", "cherry"];
let capitalizedWords = capitalize(words);
console.log(capitalizedWords)