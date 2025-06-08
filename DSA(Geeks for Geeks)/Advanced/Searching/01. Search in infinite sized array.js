// Search in infinite sized array

/**
 * I/P: [1, 10, 15, 20, 40, 80, 90, 100, 120, 500, ....]
 *      x = 100
 * O/P: 7
 * 
 * I/P: [20, 40, 100, 300, .....] 
 *      x = 50
 * O/P: -1
 */

// ==========================================
// Idea for the solution O(log position)

/**
 * o The idea is to reduce the size to search to theta(position) in 
 * O(log position) time.
 * 
 * o Then apply the binary search to the reduced size and find in O(log pos) time
 * 
 */

function binarySearch(arr, x, low, high) {
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === x) {
            return mid;
        } else if(arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

function search(arr, x) {
    if(arr[0] === x) {
        return 0;
    }

    let i = 1;
    while(arr[i] < x) {
        i = i * 2;
    }
    if(arr[i] === x) {
        return i;
    }

    return binarySearch(arr, x, Math.floor(i / 2) + 1, i - 1);
}

console.log(search([1, 10, 15, 20, 40, 80, 90, 100, 120, 500, 510, 520, 1000], 100))