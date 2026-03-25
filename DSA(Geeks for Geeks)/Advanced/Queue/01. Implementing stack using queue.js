// Implementing Stack Using Queue

/**
 * Class Stack {
 *      constructor() {
 *          ------------------
 *          ------------------
 *      }
 *      
 *      push(x) {....}
 *      pop() {....}
 *      peek() {....}
 *      size() {....}
 * 
 * }
 * 
 * o Normal queue enqueue gives first element, but for stack it should give last element
 * 
 */


/**
 * Idea for the Basic Solution:
 * ---------------------------
 * Two Queues:
 * q1 : To keep the actual items
 * q2 : To be used as an auxiliary queue
 * 
 * push(x) : a> Move everything from q1 to q2
 *           b> Enqueue x to q1
 *           c> Move everything back from q2 to q1
 * 
 * pop() : Remove front of q1
 * 
 * top() : Return front of q1
 * 
 * size() : Return size of q1
 * 
 * 
 * o Example:
 * 
 * push(10) : q1 = [10]
 *            q2 = []
 * 
 * push(20):
 * a> q1 = [], q2 = [10]
 * b> q1 = [20], q2 = [10]
 * c> q1 = [20, 10], q2 = []
 * 
 * push(30) :
 * a> q1 = [], q2 = [20, 10]
 * b> q1 = [30], q2 = [20, 10]
 * c> q1 = [30, 20, 10], q2 = []
 * 
 * 
 */

// =============================================
// Idea for the Optimized Solution:

/**
 * o Two Queues:
 * q1 : To keep the actual items
 * q2 : To be used as an auxiliary queue
 * 
 * push(x) : a> Enqueue x to q2
 *           b> Move everything from q1 to q2
 *           c> Swap the variables q1 and q2
 * 
 * 
 * Example:
 * o push(10) : q1 = [10]
 *              q2 = []
 * 
 * push(20) : 
 * a> q1 = [10], q2 = [20]
 * b> q1 = [], q2 = [20, 10]
 * c> q1 = [20, 10], q2 = []
 * 
 * push(30) :
 * a> q1 = [20, 10], q2 = [30]
 * b> q1 = [], q2 = [30, 20, 10]
 * c> q1 = [30, 20, 10], q2 = []
 */

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

    peek() {
        if(this.first === null) return null;
        return this.first.value;
    }


    isEmpty() {
        if(this.size){
            return false;
        }else {
            return true;
        }
    }

}

class Stack {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    push(x) {
        this.q2.enqueue(x);
        while(!this.q1.isEmpty()) {
            this.q2.enqueue(this.q1.dequeue());
        }

        [this.q1, this.q2] = [this.q2, this.q1];
    }

    pop() {
        if(this.q1.isEmpty()) {
            return null;
        }

        return this.q1.dequeue();
    }

    peek() {
        if(this.q1.isEmpty()) {
            return null;
        }
        return this.q1.peek();
    }

    size() {
        return this.q1.size;
    }
}

const obj = new Stack();
obj.push(10);
obj.push(20);
obj.push(30);

console.log(obj.peek());

obj.pop();
console.log(obj.peek());
