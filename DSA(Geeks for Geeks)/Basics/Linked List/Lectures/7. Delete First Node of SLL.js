// Delete first node of singly linked list

/**
 * I/P: 10--> 20--> 30--> 40--> null
 * O/P: 20--> 30--> 40--> null
 * 
 * I/P: 10--> null
 * O/P: null
 * 
 * I/P: null
 * O/P: null
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteFirst(head) {
    if(head === null) {
        return head;
    }
    return head.next;
}

head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

console.log(head);
head = deleteFirst(head);
console.log(head);