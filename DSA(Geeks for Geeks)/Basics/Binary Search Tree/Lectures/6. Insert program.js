// Insert program

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

// ========================================
// Recursive implementation
function insBST(root, key) {

    if(root === null) {
        return new Node(key);
    } else if(root.key === key) {
        return root;
    } else if(root.key > key) {
        root.left = insBST(root.left, key);
    } else {
        root.right = insBST(root.right, key);
    }

    return root;
}


// let root = insBST(null, 10);
// root = insBST(root, 20)
// root = insBST(root, 30);
// root = insBST(root, 40);
// root = insBST(root, 50);
// root = insBST(root, 60);
// root = insBST(root, 35);
// root = insBST(root, 45);
// inorder(root)

// ============================================
// Iterative implementation

function insBSTIterative(root, key) {
    let par = null;
    let curr = root;
    while(curr !== null) {
        par = curr;
        if(curr.key === key) {return root;}
        else if(curr.key < key) {curr = curr.right}
        else {curr = curr.left;}
    }

    if(par === null) {return new Node(key);}
    else if(par.key > key) {par.left = new Node(key);}
    else {par.right = new Node(key);}
    return root;
}

let root = insBSTIterative(null, 10);
root = insBSTIterative(root, 20)
root = insBSTIterative(root, 30);
root = insBSTIterative(root, 40);
root = insBSTIterative(root, 50);
root = insBSTIterative(root, 60);
root = insBSTIterative(root, 35);
root = insBSTIterative(root, 45);
inorder(root)