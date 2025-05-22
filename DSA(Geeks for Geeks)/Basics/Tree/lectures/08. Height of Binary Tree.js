// Height of Binary Tree:

/**
 * Two ways everyone is following to calculate the height of Binary Tree:
 * 1. To calculate the nodes from longest path of root to leaf node.
 * 2. To calculate the edges of the longest path.
 * 
 * We will follow the first method.
 * 
 * Idea:-
 *      o calculate the left height
 *      o calculate the right height
 *      o calculate the max of left side and right side path nodes.
 *      o max(lh, rh) + 1
 */

class Node {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}

function height(root) {
    if(root === null) {
        return 0;
    } else {
        let lh = height(root.left);
        let rh = height(root.right);
        return Math.max(lh, rh) + 1;
    }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);

console.log(height(root))

/**
 *          10
 *      20      30
 *            40
 * 
 * height(10):
 *  lh = height(20):
 *      lh = height(null)
 *      rh = height(null)
 *      return max(0, 0) + 1
 * 
 *  rh = height(30)
 *      lh = height(40)
 *          lh = height(null)
 *          rh = height(null)
 *          return max(0, 0) + 1
 *      rh = height(null)
 *      return max(1, 0) + 1
 *  return max(1, 2) + 1
 * 
 * return 3 (Ans)
 * 
 */
