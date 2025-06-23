// Vertical Sum in a Binary Tree.

/**
 * I/P:             10
 *              20      30
 *          5       15
 * 
 * O/P: 5, 20, 25, 30
 * 
 * 
 * I/P:                     10
 *                  15              25
 *              35      20
 *          40              75
 *                              80
 * 
 * O/P: 40, 35, 15, 30, 100, 80
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

// =========================================

/**
 * The idea is to use a map:
 * 1. Create an empty map 'mp'. We are going to use height as key
 * and sum as value.
 * 2. Traverse the tree and fill the map
 *          mp[-3] = 40
 *          mp[-2] = 35
 *          mp[-1] = 15
 *          mp[0] = 30
 *          mp[1] = 100
 *          mp[2] = 80
 * 3. Traverse the map and print all values.
 *      40, 35, 15, 30, 100, 80
 */

let mp = new Map();

function vSumR(root, hd) {
    if(root === null) {
        return;
    }

    vSumR(root.left, hd - 1);
    if(mp.has(hd)) {
        mp.set(hd, mp.get(hd) + root.key);
    } else {
        mp.set(hd, root.key);
    }
    vSumR(root.right, hd + 1);

}

function vSum (root) {
    vSumR(root, 0);
    for(let x of mp.values()) {
        console.log(x);
    }
}

vSum(root, 0);

/**
 * VSumR(10, 0)
 *      o VSumR(20, -1)
 *          o VSumR(null, -2)
 *          o mp[-1] = 20
 *          o VSumR(40, 0)
 *              o VSumR(null, -1)
 *              o mp[0] = 40
 *              o VSum(null, 1)
 *      o mp[0] = 50
 *      o VSumR(null, 1)
 */