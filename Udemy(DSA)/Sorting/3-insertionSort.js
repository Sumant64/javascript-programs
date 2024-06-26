// Insertion Sort

/* 
    ex arr = [3, 9, 5, 6, 12, 10]
    o we start from i = 1 and make the left half as sorted and every next element comes, we insert it at the right order.
*/

const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal
    }

    return arr;
}

const res = insertionSort([3, 9, 5, 6, 12, 10]);
console.log(res);