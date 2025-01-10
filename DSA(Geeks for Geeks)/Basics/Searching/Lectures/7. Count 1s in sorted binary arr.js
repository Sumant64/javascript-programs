/**
 * I/P: [0, 0, 0, 1, 1, 1, 1]
 * O/P: 4
 * 
 * I/P: [1, 1, 1]
 * O/P: 3
 * 
 * I/P: [0, 0, 0, 0]
 * O/P: 0
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



function countOnes(arr) {
    if(arr[arr.length - 1] === 0) {
        return 0;
    } else {
        return arr.length - firstOcc(arr, 1);
    }
}

console.log(countOnes([1, 1, 1]))