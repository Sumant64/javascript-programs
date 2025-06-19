// Iterative Preorder Traversal

/**
 * I/P:               10
 *              20           30
 *          40     50      60
 * 
 * O/P: 10, 20, 40, 50, 30, 60
 * 
 * I/P:             10
 *              20      30
 *                   40     50
 *                        60    70
 * 
 * O/P: 10, 20, 30, 40, 50, 60, 70
 * 
 * I/P:         10
 * O/P: 10
 * 
 * I/P: null
 * O/P: 
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

function iterativePreOrder (root) {
    if(root === null) return;

    let st = [];
    st.push(root);
    while(st.length > 0) {
        let curr = st.pop();
        console.log(curr.key);

        if(curr.right !== null) {
            st.push(curr.right);
        }
        if(curr.left !== null) {
            st.push(curr.left);
        }
    }
}

iterativePreOrder(root);