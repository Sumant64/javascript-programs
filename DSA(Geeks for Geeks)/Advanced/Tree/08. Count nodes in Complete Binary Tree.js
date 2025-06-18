// Count nodes in Complete Binary Tree

/**
 * I/P:             10
 *              20      30
 *          40     50
 * O/P: 5
 * 
 * 
 * I/P:         10
 *          20
 * O/P: 2
 * 
 * I/P: Null
 * O/P: 0
 * 
 * I/P:                         10
 *                      20                  30
 *                  40      50          60      70
 *              80     50       100
 * O/P: 10
 */

class TreeNode {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(30);
root.left = new TreeNode(40);
root.right = new TreeNode(50);
root.left.left = new TreeNode(70);
root.left.right = new TreeNode(75)
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);

// ==================================================
// Naive Method: to calculate node of any binary tree

/**
 * o time complexity: Theta(n)
 * o Space complexity: Theta(n)
 */

function countNode(root) {
    if(root === null) return 0;

    return 1 + countNode(root.left) + countNode(root.right);
}

console.log(countNode(root));

// ===============================================
// Efficient Method: Using the property of complete binary tree

/**
 * o Complete binay tree if all the nodes are filled then no.of node = 2 ^ h - 1 [h--> height of binary tree]
 * o Time complexity: O(log n * log n)
 * 
 */

function countNodesEff(root) {
    let ld = 0, rd = 0;

    for(let curr = root; curr !== null; curr = curr.left) {
        ld = ld + 1;
    }

    for(let curr = root; curr !== null; curr = curr.right) {
        rd = rd + 1;
    }

    if(ld === rd) {
        return Math.pow(2, ld) - 1;
    }
    return 1 + countNode(root.left) + countNode(root.right);
}

console.log(countNodesEff(root));

