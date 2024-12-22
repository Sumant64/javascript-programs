// Level Order Traversal - Line by Line (part 2) 2nd method

/**
 * Idea:
 * o count nodes of every level.
 * o We mainly run an inner loop count times.
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

// tree level order line by line

class TreeNode {
    constructor(k) {
        this.key = k;
        this.left = null;
        this.right = null;
    }
}

function printLevelLine(root) {
    let ans = "";
    if(root === null) return ans;

    let q = new Queue();
    q.enqueue(root);

    while(!q.isEmpty()) {
        let count = q.sizeOfQueue();

        for(let i = 0; i < count; i++) {
            let curr = q.dequeue();

            ans += curr.key + " ";
            if(curr.left !== null) q.enqueue(curr.left);
            if(curr.right !== null) q.enqueue(curr.right);
        }
        ans += "\n"
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