// Serialize and Deserialize a binary tree

/**
 * o Serialize: Convert binary tree in array or string
 * o Deserialize: Convert the respective array/string to again binary tree
 */

// =========================================
// Naive Solution:

/**
 * 1. First Store Inorder Traversal.
 * 2. Store a separator.
 * 3. Finally store preorder or postorder traversal
 * 
 * o Serialize:
 *          10
 *      20
 * 
 *      Inorder = [20, 10]
 *      preorder = [10, 20]
 * 
 * arr[] = [20, 10, -1, 10, 20]
 *          inor.  seprator(-1) preor.
 * 
 * o Deserialize:
 *      arr[] = [20, 10, -1, 10, 20]
 *  Use the solution to form binary tree from inorder and preorder
 * 
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

// ===============================================
// Efficient: Preorder Traversal Approach

/**
 * o We use -1 for Null
 * o Assumption: -1 is not present in the tree as data.
 * 
 *          10
 *      20      30   ==> 10, 20, -1, -1, 30, -1, -1
 * 
 *      Deserialize:
 *          10
 *      20      30
 *    Null N   N   N
 * 
 * Ex:
 *          10
 *       20         ==> 10, 20, -1, -1, -1
 * 
 * Ex:
 * 
 *              10
 *          20
 *      30
 *          40          ==> 10, 20, 30, -1, 40, -1, -1, -1, -1
 */


function serialize(root, arr) {
    if(root === null) {
        arr.push(-1);
        return;
    }
    arr.push(root.key);
    serialize(root.left, arr);
    serialize(root.right, arr);
}

let serializeArr = []
serialize(root, serializeArr);
console.log(serializeArr);

/**
 * Ex:      10
 *       20
 * 
 * serialize(10)
 *      o serialize(20)
 *          o serialize(null)
 *          o serialize(null)
 *      o serialize(null)
 * 
 * arr = [10]
 * arr = [10, 20]
 * arr = [10, 20, -1]
 * arr = [10, 20, -1, -1, -1]
 */


let index = 0;
function deserialize(arr) {
    if(index === arr.length) {
        return null;
    }

    let val = arr[index];
    index++;
    if(val === -1) {
        return null;
    }
    let root = new TreeNode(val);
    root.left = deserialize(arr);
    root.right = deserialize(arr);
    return root;
}

let newRoot = deserialize(serializeArr);
console.log(newRoot)

/**
 * deserialize() : index = 0
 *      o deserialize() : index = 1
 *          o deserialize() : index = 2
 *          o deserialize() : index = 3
 *      o deserialize() : index = 4
 */
