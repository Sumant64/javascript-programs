// Longest Consecutive Subsequence in given array

/**
 * I/P: arr[] = [1, 9, 3, 4, 2, 20]
 * O/P: 4 ==> elements are 1, 2, 3, 4
 * 
 * I/P: arr[] = [8, 20, 7, 30]
 * O/P: 2
 * 
 * I/P: arr[] = [20, 30, 40]
 * O/P: 1
 */ 

const findLargestEff = (arr) => {
    let h = new Set(arr);
    let res = 0;

    for(let i = 0; i < arr.length; i++) {
        if(h.has(arr[i] - 1) === false) {
            let curr = 1;
            while(h.has(arr[i] + curr)) {
                curr++;
            }
            res = Math.max(res, curr);
        }
    }

    return res;
}

console.log(findLargestEff([1, 9, 3, 4, 2, 20]))