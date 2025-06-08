// Diameter of a binary tree

/**
 * I/P:         10
 *          20      30
 *                40    50
 *              60
 * 
 * o longest line made by one of the parent node: 20, 10, 30, 40, 60
 * O/P: 5
 * 
 * I/P:                     10
 *                  20              60
 *              30      80
 *           50   40       90
 *        60                   18
 * o Longest line made by one of the parent node: 60, 50,30,20,80,90,18
 * O/P: 7
 * 
 * I/P:     10
 *      20
 *    30
 * O/P: 3
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
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);

/**
 *          30
 *      40       50
 *   70        60  80
 */

// ===============================================
/**
 * Idea for the Solution:
 * 
 * o We need to compute the below value for every node and return the maximum
 *  1 + lh + rh
 * lh => left height
 * rh => right height
 */

// ===============================================
// Naive Method : Time O(n^2)

function height(root) {
    if(root === null) {
        return 0;
    } else {
        let lh = height(root.left);
        let rh = height(root.right);
        return Math.max(lh, rh) + 1;
    }
}

function diameter(root) {
    if(root === null) {
        return 0;
    }

    let d = 1 + height(root.left) + height(root.right);

    return Math.max(d, diameter(root.left), diameter(root.right));
}

console.log(diameter(root));

// ================================================
// Better solution

/**
 * Theta(n): Time
 * Theta(n): Space
 * 
 * o uses hash map
 * 
 * 1. Create a map with Key: node, height: value
 * 2. Pre compute heights in the map in Theta(n) time
 * 3. The diameter function now uses the precomputed values.
 */

// ================================================
// Efficient Solution
/**
 * Theta(n) : time
 * Theta(h) : aux space
 * 
 * o we will do the computation in height function itself
 */

let res = 0;
function heightDia(root) {
    if(root === null) {
        return 0;
    }
    let lh = height(root.left);
    let rh = height(root.right);
    res = Math.max(res, 1 + lh + rh);
    return 1 + Math.max(lh, rh);
}

function diameterEff(root) {
    heightDia(root)
    return res;
}

console.log(diameterEff(root));