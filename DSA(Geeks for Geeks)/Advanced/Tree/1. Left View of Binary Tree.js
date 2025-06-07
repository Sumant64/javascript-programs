// Left view of Binary tree

/**
 * I/P:             10
 *          20              30
 *              40      50      60
 * O/P: 10, 20, 40
 * 
 * 
 * I/P:      30
 *         50
 *              60
 *          10
 * 
 * O/P: 30, 50, 60, 10
 * 
 * 
 * I/P:             10
 *              50      60
 *                  70      20
 *                        8
 * O/P: 10, 50, 70, 8
 * 
 * I/P: 10
 * O/P: 10
 *    
 */

// Custom queue class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return this.size++;
    }

    dequeue() {
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

    isEmpty() {
        if(this.size){
            return false;
        }else {
            return true;
        }
    }
}

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


// =============================================
// Iterative Solution Idea

/**
 * o We use the idea of level order traversal line by line with count
 * o Everytime we traverse to new level i === 0, then we print the node
 */

function printLeftView(root) {
    if(root === null) {
        return;
    }
    let q = new Queue();
    q.enqueue(root);

    while(!q.isEmpty()) {
        let count = q.size;

        for(let i = 0; i < count; i++) {
            let curr = q.dequeue();
            if(i === 0) {
                console.log(curr.key);
            }
            if(curr.left !== null) {
                q.enqueue(curr.left);
            }
            if(curr.right !== null) {
                q.enqueue(curr.right);
            }
        }
    }
}

// printLeftView(root);
// console.log(root);

// =================================================
// Recursive solution

/**
 *              10
 *          20      30
 *      40        60
 *        80    90   100
 * 
 * 10: lvl = 1, mxlvl = 0 => 1
 * 20: lvl = 2, mxlvl = 1 => 2
 * 30: lvl = 2, mxlvl = 2
 * 40: lvl = 3, mxlvl = 2 => 3
 * 60: lvl = 3, mxlvl = 3
 * 80: lvl = 4, mxlvl = 3 => 4
 * 90: lvl = 4, mxlvl = 4
 * 100: lvl = 4, mxlvl = 4
 * 
 * if(lvl > mxlvl) print node
 */

let mxlvl = 0;
function printLeftViewRec(root, lvl = 1) {
    if(root === null) {return;}
    if(lvl > mxlvl) {
        console.log(root.key);
        mxlvl = lvl;
    }
    printLeftViewRec(root.left, lvl + 1);
    printLeftViewRec(root.right, lvl + 1);
}

printLeftViewRec(root)