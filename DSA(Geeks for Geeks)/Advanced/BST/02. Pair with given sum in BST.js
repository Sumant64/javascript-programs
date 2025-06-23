// Pair with given sum in BST

/**
 * I/P:                 10
 *              8               20
 *          4       9       11      30
 *                               25
 * sum = 33
 * 
 * O/P: Yes (The pair is 8 & 25)
 * 
 * 
 * I/P:         20
 *          8       40
 *                35
 * sum = 49
 * 
 * O/P: No (There is no pair)
 */

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


// ===============================================
// Method 1: 

/**
 * o do inorder traversal and store in an array
 * o Use two pointer approach to find if there is a sum
 */

// ===============================================
// Method 2: Using Hashing

let s = new Set();

function isPairSum (root, sum)  {
    if(root === null) {
        return false;
    }

    if(isPairSum(root.left, sum)) {
        return true;
    }
    if(s.has(sum - root.key)) {
        return true;
    }
    s.add(root.key);

    return isPairSum(root.right, sum);
}


console.log(isPairSum(root, 15));
