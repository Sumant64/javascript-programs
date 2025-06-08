// Find the peak element in array

/**
 * o Peak Elements : Greater than or equal to neighbours
 * 
 * I/P: [5, 10, 20, 15, 7]
 * O/P: 20
 * 
 * I/P: [10, 20, 15, 5, 23, 90, 6]
 * O/P: 20 or 90
 * 
 * I/P: [80, 70, 60]
 * O/P: 80
 */

// ==================================================
// Naive Solution

function getPeak(arr) {
    let n = arr.length;

    if(n === 1) return arr[0];
    if(arr[0] >= arr[1]) return arr[0];
    if(arr[n - 1] >= arr[n - 2]) return arr[n-1];

    for(let i = 1; i < n - 1; i++) {
        if(arr[i] >= arr[i - 1] && arr[i] >= arr[i+1]) {
            return arr[i];
        }
    }
}

console.log(getPeak([5, 10, 20, 15, 7]))

// =====================================================
// Efficient Solution

/**
 * Binary Search Idea
 * 1. If arr[mid] is greater than or equal to adjacent, return mid.
 *          ex. [5, 10, 20, 11, 12]
 * 2. If arr[mid] is smaller than arr[mid - 1], recur for the left half.
 *          ex. [5, 20, 40, 30, 20, 50, 60]
 * 3. else recur for the right half.
 *          ex. [5, 20, 25, 30, 35, 50, 60]
 * 
 * o Time : O(log n)
 * o Space : O(1)
 */

function getPeakEff(arr) {
    let low = 0, n = arr.length, high = n - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if((mid === 0 || arr[mid - 1] <= arr[mid]) && 
            (mid === n-1 || arr[mid + 1] <= arr[mid])) {
                return arr[mid];
        } else if(mid > 0 && arr[mid - 1] >= arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
}

console.log(getPeakEff([5, 10, 20, 15, 7]))

