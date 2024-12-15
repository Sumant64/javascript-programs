// Implementation of Post order traversal

class Node {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}

function postorder(root) {
    if(root !== null) {
        postorder(root.left);
        postorder(root.right);
        console.log(root.key);
    }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(60);

postorder(root);