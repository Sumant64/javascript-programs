// Deletion in BST program

function getSucc(curr, key) {
    while(curr.left != null) {
        curr = curr.left;
    }
    return curr.key;
}


function delBST(root, key) {
    if(root === null) return null;

    if(root.key > key) {
        root.left = delBST(root.left, key);
    } else if(root.key < key) {
        root.right = delBST(root.right, key);
    } else {
        if(root.left === null) {
            return root.right;
        } else if(root.right === null) {
            return root.left;
        } else {
            let succ = getSucc(root.right, key);
            root.key = succ;
            root.right = delBST(root.right, succ);
        }
    }
    return root;
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

console.log(root);
console.log("+++++++++++++++++++++++")
delBST(root, 30);
console.log(root);