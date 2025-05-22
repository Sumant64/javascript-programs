// Print Nodes at K distance in javascript

/**
 * I/P:         10
 *         20       30
 *      40         50   60
 * 
 * k = 2
 * O/P: 40, 50, 60
 * 
 * 
 * I/P:         10
 *          20      30
 *                      40
 * 
 * k = 0
 * O/P: 10
 * 
 * I/P:         10
 *            20
 *           30
 * k = 1
 * O/P: 20 
 */

/**
 * Idea: Nodes that are at distance k from root are at distance k-1 from its children.
 */

class Node {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}

function printkDist(root, k) {
    if(root === null) {
        return;
    } 
    if(k === 0) {
        console.log(root.key);
    } else {
        printkDist(root.left, k - 1);
        printkDist(root.right, k - 1);
    }

}

let root = new Node(30);
root.left = new Node(40);
root.right = new Node(50);
root.left.left = new Node(70);
root.right.left = new Node(60);
root.right.right = new Node(80);

printkDist(root, 1)