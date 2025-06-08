// Search in sorted rotated array

/**
 * o Array is sorted and it can be rotated also.
 * 
 * I/P: [10, 20, 30, 40, 50, 8, 9]
 *      x = 30
 * O/P: 2
 * 
 * 
 * I/P: [100, 200, 300, 8, 9, 10, 11]
 *      x = 40
 * O/P: -1
 * 
 * I/P: [10, 20, 30]
 *      x = 10
 * O/P: 0
 */

// =======================================
// Idea for the solution

/**
 * o We will find out the mid, and then see mid > left side first element ==> left half is sorted
 * if mid < right side last element => right half is sorted.
 */

function search(arr, x) {
    let low = 0, high = arr.length - 1;
    while(low <= high) {
        // normal binary search steps
        let mid = Math.floor((low + high)/ 2);
        if(arr[mid] === x) {
            return mid;
        }

        // left half sorted
        if(arr[low] < arr[mid]) {
            if(x >= arr[low] && x < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else { // Right half sorted
            if(x > arr[mid] && x <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}

console.log(search([10, 20, 30, 40, 50, 8, 9], 50))