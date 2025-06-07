// Children sum property

/**
 * o The sum of left node and right node of child should be same as parend node
 * 
 * I/P:         20
 *          8       12
 *      3     5
 * O/P: yes
 * 
 * I/P:         10
 *          8       2
 *                2
 * 
 * O/P: yes
 * 
 * 
 * I/P:         5
 * O/P: yes
 * 
 * I/P: null
 * O/P: yes
 * 
 * I/P:     3
 *      1       2
 *            1    2
 * 
 * O/P: No
 * 
 * 
 */

class TreeNode {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(90);
root.left = new TreeNode(40);
root.right = new TreeNode(50);
root.right.left = new TreeNode(20);
root.right.right = new TreeNode(30);

/**
 * Idea for the solution:
 * 1. Check for root.
 * 2. Recursively check for the left subtree.
 * 3. Recursively check for the right subtree.
 * 4. If all of the above conditions satisfy return true, else
 * return false. 
 * 
 */

function isSum(root) {
    if(root === null) {
        return true;
    }
    if(root.left === null && root.right === null) {
        return true;
    }
    let sum = 0;
    if(root.left !== null) {
        sum += root.left.key;
    }
    if(root.right !== null) {
        sum += root.right.key;
    }

    return (root.key === sum && isSum(root.left) && isSum(root.right));
}

console.log(isSum(root))