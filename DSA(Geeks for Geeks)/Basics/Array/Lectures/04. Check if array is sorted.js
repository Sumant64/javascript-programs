// Check if the array is sorted or not

/**
 * I/P: arr[] = [8, 12, 15]
 * O/P: yes
 * 
 * I/P: arr[] = [8, 10, 10, 12]
 * O/P: yes
 * 
 * I/P: arr[] = [100]
 * O/P: yes
 * 
 * I/P: arr[] = [100, 20, 200]
 * O/P: No
 */

//=======================================
// Naive Method

function isSorted(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                return false;
            }
        }
    }
    return true;
}

// ========================================
// Efficient Method

function isSorted(arr) {
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}