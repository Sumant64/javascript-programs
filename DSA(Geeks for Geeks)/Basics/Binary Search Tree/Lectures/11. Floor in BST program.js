// Floor in BST program

function getFloor(root, x) {
    let res = null;
    while(root !== null) {
        if(root.key === x) {
            return root;
        } else if(root.key > x) {
            root = root.left;
        } else {
            res = root;
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

console.log(getFloor(root, 20));
