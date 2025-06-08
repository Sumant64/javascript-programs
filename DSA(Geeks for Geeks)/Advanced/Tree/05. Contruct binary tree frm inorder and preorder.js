// Contruct Binary Tree from Inorder and preorder

/**
 * I/P: in[] = [20, 10, 30]
 *      pre[] = [10, 20, 30]
 * O/P: Root of the below tree
 *          10
 *      20      30
 * 
 * I/P: in[] = [40, 20, 50, 10, 30, 80, 70, 90]
 *      pre[] = [10, 20, 40, 50, 30, 70, 80, 90]
 * O/P: Root of the below tree
 *              10
 *          20      30
 *      40    50        70
 *                  80      90
 */

// ================================================
// Logic for the solution

/**
 * Ex: 
 * in[] = [40, 20, 60, 50, 70, 10, 80, 100, 30]
 * pre[] = [10, 20, 40, 50, 60, 70, 30, 80, 100]
 * 
 *              Root
 *          Left        Right
 * 
 * Inorder: Left Root Right
 * Preorder: Root Left Right
 * 
 * 1. pre[0] = 10 is always the root of the binary tree. as first is root
 * 2. in[] order array we will check where is 10.
 * The left elements of 10 i.e. [40, 20, 60, 50, 70] are on the left side of the root.
 * The right elements of 10 i.e. [80, 100, 30] are on the right side
 *              10
 *          left  right
 * 3. pre[1] = 20 is the left side next parent node 
 *    and in the array from above left of 20 is left side elements
 *    and right of 20 is right side elements 
 *      [40] and [60, 50, 70]
 *                  10
 *              20      right
 *          40    R
 * 4. pre[3] = 50 is the right side parent node
 *      left element of 50 = [60]
 *      right element of 50 = [70]
 *  
 *                  10
 *              20      Right
 *          40      50
 *                60    70
 *  and the process continues... 
 */

// =====================================================
// Idea for the simple implementation
/**
 * Time : O(n^2)
 * pre = [10, 20, 30, 40, 50]
 * in = [20, 10, 40, 30, 50]
 *       0,  1,  2,  3,  4
 * 
 * let preInd = 0; (preorder array index)
 * 
 *            10[0,4]
 *      20[0,0]      30[2,4]
 *              40[2,2]     50[4,4]
 * 
 */
class Node {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}


// let preI = 0;

/**
 * 
 * @param {*} pre : pre order array 
 * @param {*} io : inorder array
 * @param {*} is : start index of inorder array
 * @param {*} ie : end index of inorder array
 */
function cTree(pre, io, is, ie) {
    if(is > ie) {
        return null;
    }
    let root = new Node(pre[preI]);
    preI++;
    if(is === ie) {return root;} // all leaf node will have same is, ie
    let i = is;

    while(i <= ie) { 
        // searching the preorder root in inorder and name as i
        // then recursively call for is to i - 1 for left and i + 1 to ie for right

        if(io[i] === root.key) {
            break;
        }
        i++;
    }
    root.left = cTree(pre, io, is, i-1);
    root.right = cTree(pre, io, i+1, ie);

    return root;
}

// let root = cTree([10, 20, 30], [20, 10, 30], 0, 2)
// console.log(root);

// ===================================================
// Efficient approach

/**
 * o Every time we are searching the node value with while loop.
 * o So we will use hashmap here.
 */

let preI = 0;

let mp = new Map();
function buildMap(io) {
    for(let i = 0; i < io.length; i++) {
        mp.set(io[i], i);
    }
}

function cTreeEff(pre, io, is, ie) {
    if(is > ie) {
        return null;
    }
    let root = new Node(pre[preI]);
    preI++;
    if(is === ie) {return root;} // all leaf node will have same is, ie
    
    
    let i = mp.get(root.key);

    
    root.left = cTreeEff(pre, io, is, i-1);
    root.right = cTreeEff(pre, io, i+1, ie);

    return root;
}

let pre = [10, 20, 40, 50, 30, 70, 80, 90];
let io = [40, 20, 50, 10, 30, 80, 70, 90];
buildMap(io);
let root = cTreeEff(pre, io, 0, io.length - 1)
console.log(root);