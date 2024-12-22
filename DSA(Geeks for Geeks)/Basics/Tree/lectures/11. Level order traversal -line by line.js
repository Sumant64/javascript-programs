// Level Order Traversal - Line by Line

/**
 * I/P:
 *                  10
 *              20      30
 *          40    50       60
 *                       70   80
 * 
 * O/P:
 *  10
 *  20 30
 *  40 50 60
 *  70 80
 * 
 * 
 * I/P:
 *          10
 *              20
 *                  30
 * 
 * O/P: 
 *  10
 *  20 
 *  30
 */

/**
 * Idea:
 * We insert a null after every level.
 * o When we see a null, we print a newline and insert a null
 * 
 * Ex:
 *          10
 *      20      30
 *    40
 * 
 * 10, null...  --> 10
 * null, 20, 30... --> newline
 * 20, 30, null.... --> 20
 * 30, null, 40... --> 30
 * null, 40,... --> newline
 * 40, null... --> 40
 * nul....  
 */


// Custom queue data structure

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

    sizeOfQueue() {
        return this.size;
    }


    isEmpty() {
        if(this.size){
            return false;
        }else {
            return true;
        }
    }

}


// tree line by line

class TreeNode {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}

function printLevelLine(root) {
    let ans = ""
    if(root === null) return ans;
    let q = new Queue()

    q.enqueue(root);
    q.enqueue(null);

    while(q.sizeOfQueue() > 1) {
        let curr = q.dequeue();

        if(curr === null) {
            ans += "\n"
            q.enqueue(null);
            continue;
        }

        ans += curr.key + " ";
        if(curr.left !== null) q.enqueue(curr.left);
        if(curr.right !== null) q.enqueue(curr.right);
    }

    return ans;
}

let root = new TreeNode(30);
root.left = new TreeNode(40);
root.right = new TreeNode(50);
root.left.left = new TreeNode(70);
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);

console.log(printLevelLine(root))