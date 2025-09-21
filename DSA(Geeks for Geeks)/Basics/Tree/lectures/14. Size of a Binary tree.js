// Size of a Binary Tree in javascript

/**
 * I/P:         10
 *          20      30
 *                40    50
 * Output: 5
 * 
 * 
 * I/P:             10
 *              20
 *          30
 * O/P: 3
 * 
 * I/P: root = null
 * O/P: 0
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
 * Ideas for the Solutions:
 * ------------------------
 * 1. Recursive: 
 *      o Recursively count in left.
 *      o Recursively count in right.
 *      o Add above two and one, and return
 * 
 * 2. Iterative:
 *      o Initialize: count = 0
 *      o Increment count inside the while loop.
 *      o Return the count
 */

function getSize(root) {
    if(root === null) {
        return 0;
    }

    return 1 + getSize(root.left) + getSize(root.right);
}

console.log(getSize(root));
