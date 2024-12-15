// Preorder Traversal

class Node {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}

function preorder(root) {
    if(root !== null) {
        console.log(root.key);
        preorder(root.left);
        preorder(root.right);
    }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);

preorder(root);
