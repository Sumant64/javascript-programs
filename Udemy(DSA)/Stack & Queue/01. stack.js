// Javascript program to implement a stack using singly

class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}


class Stack {
    constructor() { 
        this.head = null; 
    }

    // Function to check if the stack is empty
    isEmpty() {    
        // If head is null, the stack is empty
        return this.head === null;
    }


    push(new_data) {
        const new_node = new Node(new_data);

        if (!new_node) {
            console.log("\nStack Overflow");
            return;
        }

        new_node.next = this.head;
        this.head = new_node;
    }

    // Function to remove the top element from the stack
    pop() {
        if (this.isEmpty()) {
            console.log("\nStack Underflow");
        }
        else {
            let temp = this.head;
            this.head = this.head.next;
            temp = null;
        }
    }

    // Function to return the top element of the stack
    peek() {
        if (!this.isEmpty())
            return this.head.data;
        else {
            console.log("\nStack is empty");
            return Number.MIN_VALUE;
        }
    }
}

// Driver program to test the stack implementation
const st = new Stack();

// Push elements onto the stack
st.push(11);
st.push(22);
st.push(33);
st.push(44);

// Print top element of the stack
console.log("Top element is " + st.peek());

// removing two elemements from the top
console.log("Removing two elements...");
st.pop();
st.pop();

// Print top element of the stack
console.log("Top element is " + st.peek());