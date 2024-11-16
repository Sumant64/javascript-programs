// Insert at the end of singly linked list

/**
 * I/P: 10--> 20--> 30--> null
 * x = 40
 * O/P: 10--> 20--> 30--> 40--> null
 * 
 * I/P: null, x = 10
 * O/P: 10--> null
 * 
 * I/P: 10--> null, x = 20
 * O/P: 10--> 20--> null
 */


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertEnd(head, x) {
    let temp = new Node(x);
    if(head === null) {
        return temp;
    }
    let curr = head;
    while(curr.next !== null) {
        curr = curr.next;
    }
    curr.next = temp;
    return head;
}

let head = null;
head = insertEnd(head, 10);
head = insertEnd(head, 20);
head = insertEnd(head, 30);
console.log(head);