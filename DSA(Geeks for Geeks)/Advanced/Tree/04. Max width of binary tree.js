// Maximum width of Binary Tree

/**
 * I/P:             10
 *              20      30
 *          40       50     60
 *      80
 * 
 * O/P: 3
 * 
 * I/P:         10
 *          20  
 *              30
 * O/P: 1
 * 
 * I/P:         10
 *          20       30
 *        40   50  60   70
 * 
 * O/P: 4
 * 
 * I/P: null
 * O/P: 0
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
root.left.right = new TreeNode(75)
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);

/**
 * o Idea for solution
 * 
 * o Use the line by line level order traversal idea. We get count
 * of nodes at a level using queue size.
 */


function maxWidth(root) {
    if(root === null) {return 0;}
    let q = new Queue();
    q.enqueue(root);
    let res = 0;
    
    while(!q.isEmpty()) {
        let count = q.size;
        res = Math.max(res, count);
        for(let i = 0; i < count; i++) {
            let curr = q.dequeue();
            if(curr.left !== null) {
                q.enqueue(curr.left);
            }
            if(curr.right !== null) {
                q.enqueue(curr.right);
            }
        }
    }

    return res;
}

console.log(maxWidth(root));
