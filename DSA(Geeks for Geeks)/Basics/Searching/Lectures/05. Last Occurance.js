// Index of last occurance in sorted array

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

console.log(lastOcc([10, 10, 10, 20, 20, 20, 30, 40, 50, 60], 20));