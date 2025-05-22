// Binary Search (recursive)

/**
 * I/P: [10, 20, 30, 40, 50, 60]
 *  x = 20
 * O/P: 1
 * 
 * I/P: [5, 10, 15, 25, 35]
 *  x = 20
 * O/P: -1
 * 
 * I/P: [10, 10]
 *  x = 10
 * O/P: 0 or 1
 * 
 * I/P: [5, 15, 25]
 *  x = 25
 * O/P: 2
 * 
 * // Idea;
 * 
 * mid = (low + high)/2
 * 
 * case 1: (l[mid] ==x) --> return mid
 * case 2: (l[mid] > x) --> high = mid - 1
 * case 3: (l[mid] < x) --> low = mid + 1
 * 
 */

function bSearch(arr, x, low, high) {
    if(low > high) {
        return -1;
    }
    let mid = Math.floor((low + high)/2);
    if(arr[mid] === x) {
        return mid;
    } else if(arr[mid] > x) {
        return bSearch(arr, x, low, mid - 1);
    } else {
        return bSearch(arr, x, mid + 1, high);
    }
}

console.log(bSearch([10, 20, 30, 40, 50, 60], 60, 0, 5));