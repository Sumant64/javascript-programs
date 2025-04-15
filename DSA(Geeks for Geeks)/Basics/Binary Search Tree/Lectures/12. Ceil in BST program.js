// Ceil in BST program

function getCeil(root, x) {
    let res = null;
    while(root !== null) {
        if(root.key === x) {
            return root;
        } else if(root.key > x) {
            res = root;
            root = root.left;
        } else {
            root = root.right;
        }
    }

    return res;
}

// BST 

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

console.log(getCeil(root, 2));