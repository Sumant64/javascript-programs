// Vertical Traversal of Binary Tree

/**
 * I/P:         10
 *          20      30
 *               40     50
 * 
 * O/P: 20
 *      10  40
 *      30
 *      50
 * 
 * I/P:         10
 *          20
 *              30
 * O/P: 20
 *      10  30
 * 
 * 
 * I/P:               1
 *              2           3
 *          4       5   6       7
 *                           8
 *                         9
 * 
 * O/P:  4
 *      2
 *      1   5   6   9
 *      3   8
 *      7
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

// ========================================
// Idea to Solve the problem

/**
 * 1. Create an empty map 'mp'
 * 2. Do level order traversal and put nodes into the map.
 *      mp = [[0, [10, 40, 50]],
 *            [-1, [20]]
 *            [1, [30]]
 *            [2, [60]]
 *            ]
 * 3. Sort the map and print values one by one
 *          [20]
 *          [10, 40, 50]
 *          [30]
 *          [60]
 */

function vTraversal(root) {
    let mp = new Map();
    let q = [[root, 0]];
    while(q.length > 0) {
        let pair = q.shift();
        let curr = pair[0];
        let hd = pair[1];

        if(mp.has(hd)) {
            let arr = mp.get(hd);
            arr.push(curr.key);
            mp.set(hd, arr);
        } else {
            mp.set(hd, [curr.key]);
        }

        if(curr.left !== null) {
            q.push([curr.left, hd - 1]);
        }
        if(curr.right !== null) {
            q.push([curr.right, hd + 1]);
        }
    }

    mp = new Map([...mp.entries()].sort((a, b) => a[0] - b[0]));

    for(let x of mp.values()) {
        console.log(x);
    }
}

vTraversal(root);