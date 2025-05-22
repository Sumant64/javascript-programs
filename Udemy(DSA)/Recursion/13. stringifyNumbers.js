/*
stringifyNumbers
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers 
and converts them to strings. Recursion would be a great way to solve this!

The exercise intends for you to create a new object with the numbers converted to strings,
 and not modify the original. Keep the original object unchanged.
*/

const stringifyNumbers = (obj) => {
    // Create a new object to avoid modifying the original
    const newObj = {};

    // Loop through the keys of the original object
    Object.keys(obj).forEach((key) => {
        // If the value is a number, convert it to a string
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } 
        // If the value is an object, recursively call stringifyNumbers on it
        else if (typeof obj[key] === 'object' && obj[key] !== null  && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } 
        // Otherwise, just copy the value as is
        else {
            newObj[key] = obj[key];
        }
    });

    return newObj; // Return the new object with the numbers as strings
};

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


stringifyNumbers(obj)