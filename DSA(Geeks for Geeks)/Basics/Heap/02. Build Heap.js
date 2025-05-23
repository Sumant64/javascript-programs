// Build heap in javascript

/**
 * --> Build heap in javascript:
 * o Given will be the array which we represent it as binary tree from the previous index formula. The 
 *   given array will be the complete binary tree.
 * o We need to convert it to the min heap i.e. the parent node will 
 *   always be the smallest of any subtree taken.
 * 
 * 
 * o I/P: [10, 5, 20, 2, 4, 8]
 *   O/P: [2, 4, 8, 5, 10, 20]
 * 
 *              10
 *          5       20    [20 child is 8 which is not the smallest parent of sub tree]
 *        2   4    8
 * 
 *              Converts to
 *          
 *              2
 *          4       8
 *      5     10  20
 * 
 * 
 * o I/P: [30, 20, 10]
 *   O/P: [10, 20, 30]
 * 
 *          30
 *      20      10
 * 
 *          Converts to
 * 
 *          10
 *      20      30
 * 
 * 
 */


// ------------------------------------------------------
// Naive Solution

/**
 * --> Naive Solution:
 *    o Time Complexity: O(n log n)
 *    o Simply we will sort the array.
 * 
 *                  10(0)
 *           5(1)               2(2)
 *     20(3)     1(4)      40(5)   15(6)
 * 5(7)   11(8)
 * 
 *  o Array given : [10, 5, 2, 20, 1, 40, 15, 5, 11]
 * 
 *  o After sorting: [1, 2, 5, 5, 10, 11, 15, 20, 40]
 * 
 *                          1
 *          2                           5
 *      5       10              11          15
 *   20   40
 * 
 */

// ---------------------------------------------------------------------
// Efficient Solution:

/**
 * o Time Complexity : O(n)
 * o We will make one function which will correct the binary tree into min heap subtree by subtree.
 * o We will start from the last subtree. We will leave all the leaf nodes as it is already correct.
 * o We will first take the bottom right most element's parent element.
 * o We know that bottom right most element of binary tree is the last element of array.
 */


class MinHeap {
    constructor(arr) {
        if(arr === undefined){
            this.arr = []
        }

        this.arr = [...arr]; // make replica of the given arr
        let i = Math.floor((arr.length - 2)/ 2); // find the parent of the bottom right most element of binary tree
        // the above formula come from the 1st lecture.

        while(i >= 0) {
            this.minHeapify(i);
            i = i - 1;
        }
    }

    // other methods of the class
}