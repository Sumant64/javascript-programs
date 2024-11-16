// Leaders in an array

/**
 * I/P: arr = [7, 10, 4, 3, 6, 5, 2]
 * O/P: 10  6   5   2
 * 
 * I/P: arr = [10, 20, 30]
 * O/P: 30
 * 
 * I/P: arr = [30, 20, 10]
 * O/P: 30  20  10
 */


// Naive Solution

/**
 * For every element, traverse the elements on right and if there is no greater, then print it
 */

function printLeader(arr) {
    for(let i = 0; i < arr.length; i++) {
        let flag = false;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] > arr[i]) {
                flag = true;
                break;
            }
        }
        if(flag == false) {
            console.log(arr[i]);
        }
    }
}

console.log(printLeader([7, 10, 4, 3, 6, 5, 2]));

// ===================================================
// Efficient Solution

/**
 * Traverse from the right side and keep track of the maximum
 */

function printLeaderEff(arr) {
    let res = [];
    let n = arr.length;
    let currLead = arr[n - 1];
    res.push(currLead);

    for(let i = n - 2; i >= 0; i--) {
        if(arr[i] >= currLead) {
            currLead = arr[i];
            res.push(currLead);
        }
    }

    for(let i = res.length - 1; i >= 0; i--) {
        console.log(res[i]);
    }
}

console.log(printLeaderEff([7, 10, 4, 3, 6, 5, 2]));