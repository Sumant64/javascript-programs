// Search in BST for the Binary Search Tree

/**
 * I/P:             20
 *              10      40
 *          5         30    80
 *                         50  100
 *      key = 50
 * O/P: True
 * 
 * I/P:         15
 *          10      12
 *      key = 16
 * O/P: False
 * 
 * I/P:             18
 *              16      30
 *                    20    100
 *      key = 18
 * O/P: True
 * 
 * I/P: 10
 *      key = 20
 * O/P: False  
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
root.left = new Node(5);
root.right = new Node(30);
root.right.left = new Node(25);
root.right.right = new Node(40);

//====================================
// Recursive Solution:

function searchBST(root, key) {
    if(root === null) {
        return false;
    } else if(root.key === key) {
        return true;
    } else if(root.key > key) {
        return searchBST(root.left, key);
    } else {
        return searchBST(root.right, key);
    }
}


console.log(searchBST(root, 40))

// ======================================
// Iterative solution

function searchBSTiterative (root, key) {
    while(root !== null) {
        if(root.key === key) {
            return true;
        } else if(root.key > key) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return false;
}

console.log(searchBSTiterative(root, 40))