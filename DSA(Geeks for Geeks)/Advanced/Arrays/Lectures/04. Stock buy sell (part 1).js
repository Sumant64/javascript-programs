// Stock Buy and Sell (part 1)

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

/**
 * Idea for the solution:
 * x0, x1, ..... xi....xj...x(n-1)
 * 
 * Consider every pair (xi, xj) such that
 * a> j > i
 * b> xj > xi
 * 
 * Profit with this pair considered is:
 * (xj - xi) + maxProfit(0, i - 1) + maxProfit(j + 1, n - 1)
 */

function maxProfit(arr, b, e) { // b => beginning, e => end index
    if(b >= e) return 0;
    let res = 0;
    for(let i = b; i < e; i++) {
        for(let j = i + 1; j <= e; j++) {
            if(arr[j] > arr[i]) {
                let curr = (arr[j] - arr[i]) + maxProfit(arr, b, i - 1) + maxProfit(arr, j + 1, e);
                res = Math.max(res, curr);
            }
        }
    }
    return res;
}

const res = maxProfit([10, 20, 30], 0, 2);
console.log(res);



