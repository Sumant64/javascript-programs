// Second largest element in an array

// Naive Solution

const secondLargest = (arr) => {

    // sort the array
    arr.sort((a, b) => a - b);

    let largestElement = arr[arr.length - 1];
    let index = arr.length - 2;

    while(index >= 0 && arr[index] === largestElement) {
        index--;
    }

    if(index === -1) {
        return -1;
    } else {
        return arr[index];
    }
}

// console.log(secondLargest([9, 9]))

// ========================================================
// Efficient Solution

const secondLargestEff = (arr) => {
    let firstMax = -1;
    let secondMax = -1;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        }

        if(arr[i] > secondMax && arr[i] < firstMax) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}

console.log(secondLargest([9, 7, 8, 3, 6, 9]))