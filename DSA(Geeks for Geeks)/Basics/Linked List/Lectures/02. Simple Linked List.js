// Simple Linked List

// First approch to make simple linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let temp1 = new Node(10);
let temp2 = new Node(20);
let temp3 = new Node(30);
temp1.next = temp2;
temp2.next = temp3;
head = temp1; // assigning the head

console.log(temp1);

// ===============================================
// Alternate approach

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);