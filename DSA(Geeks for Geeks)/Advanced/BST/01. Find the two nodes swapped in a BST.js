// Find the two nodes swapped in a BST

/**
 * I/P:                   20
 *                  60          80
 *              4       10   8      100
 * 
 * O/P: 60, 8
 * 
 * I/P:                 60
 *              8               80
 *          4       10      20      100
 * 
 * O/P: 60, 20
 * 
 * 20 is on the right side of the root, and it is should be more than the root.
 */

class Node {
    constructor(data) {
        this.key = data;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(20);
root.left = new Node(60);
root.right = new Node(80);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.right.left = new Node(8);
root.right.right = new Node(100);

// =============================================
// Naive Solution

/**
 * o Make the inorder traversal.
 * o Insorder traversal of BST is always sorted. So we need to find the
 * two elements which are not arranged in the sorted order.
 * o When we will find the first element, then we will assume that the next
 * after element is the second and then we will check further. Then we will 
 * find any other then we will replace it with second.
 */


function inorder (root) {
    let arr = []

    function traverseRecc (root) {
        if(root !== null) {
            traverseRecc(root.left);
            arr.push(root.key);
            traverseRecc(root.right);
        }
    }

    traverseRecc(root);
    return arr;
}

function findTwo(arr) {
    let first = null;
    let sec = null;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            if(first === null) {
                first = arr[i - 1];
            }
            sec = arr[i];
        }
    }

    console.log(first);
    console.log(sec);
}

// let arrInorder = inorder(root);
// findTwo(arrInorder);

// =====================================================
// Efficient Solution

let prev = null, first = null, sec = null;

function fixBST (root) {
    if(root === null) return;

    fixBST(root.left);
    if(prev !== null && root.key < prev.key) {
        if(first === null) {
            first = prev;
        }
        sec = root;
    }

    prev = root;
    fixBST(root.right);
}

fixBST(root);
console.log(first.key);
console.log(sec.key);

/**
 *          18
 *      60      70
 *            8     80
 * 
 * fixBST(18)
 *      o fixBST(60)
 *          o fixBST(null)
 *          o prev = 60
 *          o fixBst(null)
 *      o first = 60, sec = 18, prev = 18
 *      o fixBst(70)
 *          o fixBst(8)
 *              o fixBst(null)
 *              o sec = 8, prev = 8
 *              o fixBst(null)
 *          o prev = 70
 *          o fixBst(80)
 *              o fixBst(null)
 *              o prev = 80
 *              o fixBst(null)
 * 
 */