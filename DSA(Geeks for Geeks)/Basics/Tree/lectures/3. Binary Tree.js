// Binary Tree

/**
 * Tree which has atmost 2 child is called Binary tree.
 * o We will implement it with the help of linked list
 * 
 *                          30
 *                      40      50
*                  70         60   70  
 * 
 * o Binary tree are the most common. They have implementation like
 * binary search tree, cell balancing binary search tree.
 * 
 * 
 * 
 * 
 */

// Representation of Binary tree

class Node {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(30);
root.left = new Node(40);
root.right = new Node(50);
root.left.left = new Node(70);
root.right.left = new Node(60);
root.right.right = new Node(80);


console.log(root);

/**
 * Representation of above tree:
 * 
 *                  30
 *              40      50
 *            70       60  80  
 */