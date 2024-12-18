// Level order traversal or breadth first traversal

/**
 * I/P: 
 *                      10
 *                20            30
 *              8     7             6
 *                  9   15
 * 
 * O/P: 10, 20, 30, 8, 7, 6, 9, 15
 * 
 * I/P: 
 *          3
 *       4
 *          5
 * 
 * O/P: 3, 4, 5   
 */

// We will do it with the help of Queue

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


// Level order implementation


class TreeNode {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}

function printLevel(root) {
    if(root === null) {return;}
    let q = new Queue();
    q.enqueue(root);
    while(!q.isEmpty()){
        let curr = q.dequeue();
        console.log(curr.key);
        if(curr.left !== null) {
            q.enqueue(curr.left);
        }
        if(curr.right !== null) {
            q.enqueue(curr.right);
        }
    }

}

let root = new TreeNode(30);
root.left = new TreeNode(40);
root.right = new TreeNode(50);
root.left.left = new TreeNode(70);
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);

printLevel(root);