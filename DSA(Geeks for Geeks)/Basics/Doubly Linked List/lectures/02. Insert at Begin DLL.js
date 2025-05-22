// Insert at the beginning of doubly linked list

/**
 * I/P: null <-- 10 --> <-- 20 --> <-- 30 --> null
 * x = 5
 * O/P: null <-- 5 --> <-- 10 --> <-- 20 --> <-- 30 --> null
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function insertBegin (head, x) {
    let temp = new Node(x);
    temp.next = head;
    if(head !== null) {
        head.prev = temp;
    }

    return temp;
}

let head = null;
head = insertBegin(head, 10);
head = insertBegin(head, 20);
head = insertBegin(head, 30);

console.log(head);
