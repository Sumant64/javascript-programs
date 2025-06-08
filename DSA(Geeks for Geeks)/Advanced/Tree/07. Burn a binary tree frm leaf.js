// Burn a Binary tree from a Leaf

/**
 * o It means that every second the adjacent nodes will be burnt from it leaf,
 * and total time to burn every adajacent node is counted.
 * 
 * o Idea for the solution: farthest node from the given leaf.
 * 
 * I/P:         10
 *          20      30
 *      40    50       60
 *  leaf = 50
 * O/P: 4
 * 
 * 
 * I/P:             10
 *              20
 *           30
 *      40       50
 * leaf = 50
 * O/P: 3
 * 
 * I/P:             10
 *              20
 *           30
 *         40    50
 *      60
 *    70
 * leaf = 50
 * O/P: 4
 * 
 * I/P:         10
 *          20
 * leaf = 30
 * O/P: -1
 * 
 * 
 */

class TreeNode {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(10)
root.left = new TreeNode(20)
root.right = new TreeNode(30)
root.left.left = new TreeNode(40);
root.left.right = new TreeNode(50);
root.right.right = new TreeNode(60);



// ===========================================
// Idea for the solution

/**
 * o farthest node from the given leaf
 * 
 * Ex
 * I/P:             10(3)
 *              20 (2)
 *           30(1)    
 *         40(2)    50(0)
 *      60(3)
 *    70(4)      
 * 
 * The farthest node must be reachable through one of the ancestors (50, 30, 20, and 10)
 * 
 * Distance through 50= 0
 * Distance through 30 = 4
 * Distance through 20 = 3
 * Distance through 10 = 3         
 */

let res = 0;

// we are taking dist as array because in every recursive call we need reference.
function burnTime(root, leaf, dist) { 
    if(root === null) {
        return 0;
    }
    if(root.key === leaf) {
        dist[0] = 0;
        return 1;
    }
    let ldist = [-1], rdist = [-1];
    let lh = burnTime(root.left, leaf, ldist);
    let rh = burnTime(root.right, leaf, rdist);
    if(ldist[0] !== -1) {
        dist[0] = ldist[0] + 1;
        res = Math.max(res, rh + dist[0]);
    } else if(rdist[0] !== -1) {
        dist[0] = rdist[0] + 1;
        res = Math.max(res, lh + dist[0])
    }
    return Math.max(lh, rh) + 1;
}

burnTime(root, 50, [-1]);
console.log(res);