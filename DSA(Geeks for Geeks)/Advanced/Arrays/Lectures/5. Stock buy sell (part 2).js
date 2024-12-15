// Stock buy and sell part 2 (Efficient solution)

/**
 * There are the stock and every day buy and sell is given. We need to find out the max profit we can get if we buy at certain day 
 * and sell at certain day
 * 
 * I/P: arr = [1, 5, 3, 8, 12]
 * O/P: max profit = 13  --> buy at 1 & sell at 5 (4 profit), buy at 3 and sell at 8 (+5 profit), buy at 8 and sell at 12 (+4 profilt)
 * 
 * I/P: [30, 20, 10]
 * O/P: profit = 0
 * 
 * I/P: [10, 20, 30];
 * O/P: profit = 20
 * 
 */

function maxProfit(arr) {
    let res = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i - 1]) {
            res += (arr[i] - arr[i - 1]);
        }
    }
    return res;
}

console.log(maxProfit([1, 5, 3, 8, 12]))

/**
 * res = 0
 * i = 1: res = (0 + (5 - 1)) = 4
 * i = 2:
 * i = 3: res = (4 + (8 - 3)) = 9
 * i = 4: res = (9 + (12 -8)) = 13
 */