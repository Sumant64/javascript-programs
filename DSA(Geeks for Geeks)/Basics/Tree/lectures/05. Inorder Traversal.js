// Implementation of Inorder Traversal

class Node {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}

function inorder(root) {
    if(root !== null) {
        inorder(root.left);
        console.log(root.key);
        inorder(root.right);
    }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);

inorder(root);

/**
 *          10
 *      20      30
 *             40   60 
 * 
 * ans: 20, 10, 40, 30, 60
 * inorder(10)
 *    o inorder(20)
 *          o inorder(null)
 *          o print(20)
 *          o inorder(null)
 *    o print(10)
 *    o inorder(30)
 *          o inorder(40)
 *              o inorder(null)
 *              o print(40)
 *              o inorder(null)
 *    o print(30)
 *          o inorder(60)
 *              o inorder(null)
 *              o print(60)
 *              o inorder(null)
 */