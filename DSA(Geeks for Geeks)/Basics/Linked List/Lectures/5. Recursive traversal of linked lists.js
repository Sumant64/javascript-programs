// Recursive traversal of Linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function rPrint(head) {
    if(head === null){
        return;
    }
    console.log(head.data);
    rPrint(head.next);
}

head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
rPrint(head);