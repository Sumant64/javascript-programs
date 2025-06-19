// Iterative Inorder Traversal

/**
 * I/P:         10
 *          20      30
 *      40    50  60
 * 
 * O/P: 40, 20, 50, 10, 60, 30
 * 
 * 
 * I/P:                 10
 *                  20      30
 *              40
 *          50
 *      60      70
 * 
 * O/P: 60, 50, 70, 40, 20, 10, 30
 * 
 * I/P: 10
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

function iterativeInorder(root) {
    let st = [];
    let curr = root;
    while(curr !== null || st.length > 0) {
        while(curr !== null) {
            st.push(curr);
            curr = curr.left;
        }
        curr = st.pop();
        console.log(curr.key);
        
        curr = curr.right;
    }
}

iterativeInorder(root);

/**
 * Dry Run
 * Ex:           10
 *          20          30
 *      40     50
 * 
 * Ist: [] => [10] =>  [10, 20] => [10, 20, 40]
 *      print(40), curr = null
 * 
 * IInd: print(20), [10], curr = 50
 * 
 * IIIrd: [50, 10], print(50), [10], curr = null
 * 
 * IVth: print(10), [], curr = 30
 * 
 * Vth: [30], print(30), [], curr = null, 
 */