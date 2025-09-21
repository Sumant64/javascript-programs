// Maximum in a Binary Tree

/**
 * I/P:           10
 *            30      40
 *                  80
 * O/P: 80
 * 
 * 
 * I/P:             20
 *              30
 *          40
 * 
 * O/P: 40
 * 
 * 
 * I/P: root = null
 * O/P: -infinity
 * 
 * I/P:         80
 *          40      5
 * O/P: 80
 * 
 */

class Node {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);


/**
 * Ideas for Solutions:
 * --------------------
 * 1. Recursive Soln:
 *      o Recursively find the max in the left subtree.
 *      o Recursively find the max in the right subtree.
 *      o Return the max of the above two values and root.
 * 
 * 2. Iterative Soln:
 *      o Initialize: res = -Infinity
 *      o Do the following traversal loop.
 *          o If curr is more than res, update res.
 *      o Return res
 */

function getMax(root) {
    if(root === null) {
        return Number.NEGATIVE_INFINITY;
    }

    return Math.max(root.key, getMax(root.left), getMax(root.right));
}

console.log(getMax(root));

/**
 * getMax(10)
 *      getMax(20)
 *          getMax(null)
 *          getMax(null)
 * 
 *      getMax(80)
 *          getMax(5)
 *              getMax(null)
 *              getMax(null)
 *          getMax(null)
 */


