// Reverse a Queue

/**
 * I/P: q = [20, 10, 15, 30]
 *          front        rear
 * 
 * O/P: q = [30, 15, 10, 20]
 *          front       rear
 * 
 */

/**
 * q = [20, 10, 15, 30]
 * 
 * 1. Create an empty Stack
 * 
 * 2. Move all items of q to Stack
 *      30
 *      15
 *      10
 *      20
 * 
 * 3. Move all items back to the q
 *      q = [30, 15, 10, 20]
 * 
 * Time: Theta(n)
 * Aux. Space: Theta(n)
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

// ======================================
// Iterative Solution

function revQueue(q) {
    let st = [];
    while(!q.isEmpty()) {
        st.push(q.dequeue());
    }
    while(st.length > 0) {
        q.enqueue(st.pop());
    }

    return q;
}


let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
// console.log(q);
// console.log('=======================')

// revQueue(q);
// console.log(q);

// ===================================================
// Recursive Solution
/**
 * Time Complexity: Theta(n)
 * Aux Space : Theta(n)
 */

function revQueueRec (q) {
    if(q.isEmpty()) {
        return q;
    }
    let x = q.dequeue();
    revQueueRec(q);
    q.enqueue(x);
}

console.log(q);
console.log('=======================')

revQueueRec(q)
console.log(q);

