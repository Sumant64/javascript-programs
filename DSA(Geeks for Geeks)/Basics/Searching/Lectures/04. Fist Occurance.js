// Index of First Occurrence in Sorted

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

console.log(firstOcc([10, 10, 10, 20, 20, 20, 30, 40, 50, 60], 20));