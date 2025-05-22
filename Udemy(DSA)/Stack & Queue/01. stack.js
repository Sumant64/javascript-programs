class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 *    Stack
 *    4 --> first
 *    5   
 *    6
 *    7
 *    8 --> last
 */

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return this.size++;
    }

    pop() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);              
stack.push(4);
stack.push(5);
stack.push(6);
console.log(stack);