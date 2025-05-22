// Frequencies in the sorted array

/**
 * I/P: arr = [10, 10, 10, 25, 30, 30]
 * O/P: 10  3
 *      25  1
 *      30  2
 * 
 * I/P: arr = [10, 10, 10, 10]
 * O/P: 10  4
 */

function freqArr(arr) {
    let i = 0;
    while(i < arr.length) {
        let j = i + 1, freq = 1;
        while(j < arr.length) {
            if(arr[i] == arr[j]) {
                freq++;
                j++;
            }else {
                break;
            }
        }
        console.log(`${arr[i]}  ${freq}`);
        i = j;
    }
}

freqArr([10, 10, 10, 25, 30, 30])