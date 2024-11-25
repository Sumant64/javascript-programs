// Count Occurances in Sorted array

/**
 * I/P: [10, 20, 20, 20, 30, 30]
 *  x = 20
 * O/P: 3
 * 
 * I/P: [10, 10, 10, 10, 10]
 *  x = 10
 * O/P: 5
 * 
 * I/P: [5, 8, 10]
 *  x = 7
 * O/P: 0
 * 
 * 
 * //Idea:
 * 1. Find index of the first occurance
 * 2. If the above step gives -1 return 0.
 * 3. Else find index of the last occurance.
 */

function firstOcc(arr, x) {
    let low = 0, high = arr.length - 1;
    while(low <= high) {
        let mid = Math.floor((low + high)/2);
        if(arr[mid] === x) {
            if(mid === 0 || arr[mid - 1] !== x) {
                return mid;
            } else {
                high = mid - 1;
            }
        } else if(arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1
        }
    }
    return -1;
}

function lastOcc(arr, x) {
    let n = arr.length;
    let low = 0, high = n - 1;
    while(low <= high) {
        let mid = Math.floor((low + high)/2);
        if(arr[mid] === x) {
            if(mid === (n -1) || arr[mid + 1] !== x) {
                return mid;
            } else {
                low = mid + 1;
            }
        } else if(arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

function countOcc(arr, x) {
    let fi = firstOcc(arr, x);
    if(fi === -1) {
        return 0;
    } else {
        return (lastOcc(arr, x) - fi + 1);
    }
}

console.log(countOcc([10, 20, 20, 20, 30, 30], 20))