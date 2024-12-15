// Maximum consecutive 1s 

/**
 * I/P: arr = [0, 1, 1, 0, 1, 0]
 * O/P: 2
 * 
 * I/P: arr = [1, 1, 1, 1]
 * O/P: 4
 * 
 * I/P: arr = [0, 0, 0]
 * O/P: 0
 */

/**
 * Ex: [0, 1, 1, 0, 1, 1, 1]
 * Reset the count to 0 wherever a 0 appears
 * 
 * i = 0: count = 0, res = 0
 * i = 1: count = 1, res = 1
 * i = 2: count = 2, res = 2
 * i = 3: count = 0, res = 2
 * i = 4: count = 1, res = 2
 * i = 5: count = 2, res = 2
 * i = 6: count = 3, res = 3
 */

function countMax1s(arr) {
    let count = 0, res = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            count = 0;
        } else {
            count++;
            res = Math.max(res, count);
        }
    }
    return res;
}

console.log(countMax1s([0, 1, 1, 0, 1, 1, 1]))