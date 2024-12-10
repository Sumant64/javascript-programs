// selection sort

/**
 * 
 * Similar to bubble sort, but instead of first placing large values
 * into sorted position, it places small values into sorted position.
 * 
 * --> first loop
 *      [5, 3, 4, 1, 2]   0
 *       |  | 
 *      [5, 3, 4, 1, 2]
 *       |     |
 *      [5, 3, 4, 1, 2]
 *       |        |
 *      [5, 3, 4, 1, 2]
 *       |           |
 *      
 *      [1, 3, 4, 5, 2]
 */

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }
    // console.log(arr)
    return arr;
}

const res = selectionSort([0, 2, 34, 22, 10, 19, 17]);
console.log(res);
