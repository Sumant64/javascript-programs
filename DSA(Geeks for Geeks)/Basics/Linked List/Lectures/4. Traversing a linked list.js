// Traversing a Linked List

/**
 * I/P: 10--> 20--> 30--> 40--> null
 * O/P: 10
 *      20
 *      30
 *      40
 * 
 * I/P: null
 * O/P:
 */

// creating the linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printList(head) {
    let curr = head;
    while(curr !== null) {
        console.log(curr.data);
        curr = curr.next;
    }
}

head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
printList(head);


