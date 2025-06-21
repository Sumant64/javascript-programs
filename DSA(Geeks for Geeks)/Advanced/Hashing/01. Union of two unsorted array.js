// Union of two unsorted Array

/**
 * I/P: a[] = [15, 20, 5, 15]
 *      b[] = [15, 15, 15, 20, 10]
 * 
 * O/P: 4 => count of elements after union (15, 20, 5, 15) & non repeating
 * 
 * I/P: a[] = [10, 12, 15]
 *      b[] = [18, 12]
 * O/P: 4
 * 
 * I/P: a[] = [3, 3, 3]
 *      b[] = [3, 3]
 * O/P: 1
 */

// ===========================================
// Naive Solution

/**
 * 1> Create an array []
 * 2> Append all elements of a[] to c[]
 *      c = [15, 20, 5, 15]         Theta(m)
 * 3> Append all elements of b[] to c[]
 *      c = [15, 20, 5, 15, 15, 15, 20]     Theta(n)
 * 4> Count Distinct elements in c[]    Theta(m+n)
 */

// ===========================================
// Efficient Method

function unionSize(a, b) {
    let s = new Set(a);
    for(let i = 0; i < b.length; i++) {
        s.add(b[i]);
    }

    return s.size;
}

let a = [10, 10, 20];
let b = [20, 30, 10];

console.log(unionSize(a, b));
