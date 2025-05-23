// Intersection of two sorted array

/**
 * I/P: a[] = [3, 5, 10, 10, 10, 15, 15, 20]
 *      b[] = [5, 10, 10, 15, 30]
 * 
 * O/P: 5  10  15
 * 
 * 
 * I/P: a[] = [1, 1, 3, 3, 3]
 *      b[] = [1, 1, 1, 1, 3, 5, 7]
 * O/P: 1   3
 */


// -------------------------------------------------
/**
 * Naive Solution:
 * ---------------
 * o Traverse through all distinct element of a[],and search every element
 * in b[]. If found, print it:
 *  a = [1, 20, 20, 40, 60]
 *  b = [2, 20, 20, 20]
 * 
 * Time O(m*n). It can be optimized to O(m log n) using Binary search.
 */

// --------------------------------------------------
// Efficient Solution

/**
 * Theta(m + n) --> Time complexity
 * 
 *  a[] [........i.....]
 *  b[] [.........j....]
 * 
 *  a[] = [2, 20, 20, 40, 60]
 *  b[] = [10, 20, 20, 20]
 * 
 *  if(i > 0 && a[i] === a[i - 1]) { i++; continue;}
 * 
 *  if(a[i] > b[i]) {j++;  }
 * 
 *  if(a[i] == b[j]) {print(a[i]); i++; j++;}
 */


function intersection(a, b) {
    let m = a.length, n = b.length;
    let i = 0, j = 0;
    while(i < m && j < n) {
        if(i > 0 && a[i] === a[i - 1]) {
            i++;
        } else if(a[i] < b[j]) {
            i++;
        } else if(a[i] > b[j]) {
            j++;
        } else {
            console.log(a[i]);
            i++;
            j++;
        }
    }
}

intersection([2, 20, 20, 40, 60], [10, 20, 20, 20, 40])



