// Queue in Javascript

/**
 * --> Using Normal Array
 * --> Using Map/Object
 * --> Using Circular Array
 * --> Using Linked List
 */

// ===============================
// Using Normal Array

// class Queue {
//     constructor() {
//         this.arr = [];
//     }

//     enque(x) {
//         this.arr.push(x);
//     }

//     deque() {
//         return this.arr.shift();
//     }

//     size() {
//         return this.arr.length;
//     }

//     getFront() {
//         return this.arr[0];
//     }

//     getRear() {
//         return this.arr[this.arr.length - 1];
//     }

//     isEmpty() {
//         return (this.arr.length === 0);
//     }
// }

// let q = new Queue();
// q.enque(10);
// q.enque(20);
// q.enque(30);

// console.log(q.deque());

// ========================================================
// Implementation Using Hashing (Map/ Object);

// We use array based implementation idea.

class Queue {
    constructor() {
        this.m = {};
        this.front = -1;
        this.rear = -1;
    }

    enque(x) {
        this.rear += 1;
        this.m[this.rear] = x;
        if(this.front === -1) {
            this.front += 1;
        }
    }

    deque() {
        if(this.front === -1) {
            return null;
        }

        let res = this.m[this.front];
        delete this.m[this.front];
        this.front += 1;

        if(this.front > this.rear) {
            this.front = this.rear = -1;
        }
        return res;
    }

    size() {
        return (this.rear - this.front + 1);
    }

    isEmpty() {
        return (this.front === -1);
    }
}


q = new Queue();    // m = {}, front = -1, rear = -1
q.enque(10);        // m = {0: 10}, front = 0, rear = 0
q.enque(20);        // m = {0: 10, 1: 20}, front = 0, rear = 1
q.enque(30);        // m = {0: 10, 1: 20, 2: 30}, front = 0, rear = 2
console.log(q.m)
q.deque();          // m = {1: 20, 2: 30}, front = 1, rear = 2
q.deque();          // m = {2: 30}, front = 2, rear = 2
console.log(q.m)

