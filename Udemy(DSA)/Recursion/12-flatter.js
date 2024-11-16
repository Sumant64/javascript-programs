/*
Question:
Write a recursive function called flatten which accepts an array of 
arrays and returns a new array with all values flattened.
*/

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

const flatten = (nested) => {
    const flat = [];
    const handleFlat = (array) => {
        let counter = 0;
        while(counter < array.length) {
            const val = array[counter];
            if(Array.isArray(val)) {
                handleFlat(val);
            } else {
                flat.push(val);
            }
            counter++;
        }
    }
    handleFlat(nested);
    return flat;
}

let res = flatten([1, 2, 3, [4, 5] ]); 
console.log(res);