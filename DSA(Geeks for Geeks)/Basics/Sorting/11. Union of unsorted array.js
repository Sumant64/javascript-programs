// Union of sorted array

/**
 * I/P: a[] = [15, 20, 5, 15]
 *      b[] = [15, 15, 15, 20, 10]
 * 
 * O/P: 4 (no. of elements in union = 4 (15, 20, 5, 10))
 * 
 * I/P: a[] = [10, 12, 15]
 *      b[] = [18, 12]
 * 
 * O/P: 4
 * 
 * I/P: a[] = [3, 3, 3]
 *      b[] = [3, 3]
 * 
 * O/P: 1
 */

// -------------------------------------------------------
// Naive Solution

/**
 * Naive Solution:
 * a[] = [15, 20, 5, 15]
 * b[] = [15, 15, 20]
 * 1. Create an array c[]
 * 
 * 2. Append all elements of a[] to c[]
 *      c = [15, 20, 5, 15] --> theta(m)
 * 
 * 3. Append all elements of b[] to c[]
 *      c = [15, 20, 5, 15, 15, 15, 20]  --> theta(n)
 * 
 * 4. Count Distinct elements in c[]  --> theta(m + n)
 */

// -------------------------------------------------------
// Efficient Solution

function unionSize(a, b) {
    let s = new Set(a);
    for(let i = 0; i < b.length; i++) {
        s.add(b[i]);
    }

    return s.size;
}

console.log(unionSize([15, 20, 5, 15], [15, 15, 20, 45]))