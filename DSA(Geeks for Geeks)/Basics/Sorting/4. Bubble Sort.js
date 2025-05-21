// bubble Sort

// Normal Solution:
// -------------------

function bubbleSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n-1; i++) {
        for(let j = 0; j < n-i-1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

let res = bubbleSort([8,1,2,3,4,5,6,7]);
console.log(res);

// -------------------------------------------------------
// Optimized Solution:

function bubbleSortOptimized(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }

        if(noSwaps) {
            break;
        }
    }

    return arr;
}

let resSorted = bubbleSort([8,1,2,3,4,5,6,7]);
console.log(resSorted);