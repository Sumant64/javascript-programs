// Implementation of Queue using Linked List

/**
 * q = new Queue();
 * q.enque(10);
 * q.enque(20);
 * q.enque(30);
 * console.log(q.deque());
 * q.enque(40);
 * console.log(q.getFront());
 * console.log(q.getRear());
 * console.log(q.size());
 * console.log(q.isEmpty());
 */

/**
 * --> Idea for the Implementation
 * o We need to insert at one end and remove from the other end.
 * 
 *      deque() --> | | | | | | <-- enque()
 *                front       rear
 * 
 * o Enque() and Deque() opeartions both will have O(1) time complexity.
 */

// =================================

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enque(x) {
        let temp = new Node(x);
        if(this.front === null) {
            this.front = temp;
        } else {
            this.rear.next = temp;
        }

        this.rear = temp;
        this.size += 1;
    }

    deque() {
        if(this.front === null) {
            return null;
        }
        let res = this.front.data;
        this.front = this.front.next;
        this.size -= 1;
        return res;
    }

    sizeQueue() {
        return this.size
    }

    isEmpty() {
        return this.size === 0;
    }
}

let obj = new Queue();
obj.enque(10);
obj.enque(20);
obj.enque(30);
obj.enque(40);

console.log(obj.sizeQueue());
obj.deque();
console.log(obj.sizeQueue());