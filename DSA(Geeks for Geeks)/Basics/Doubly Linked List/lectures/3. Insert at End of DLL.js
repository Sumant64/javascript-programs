// Insert at the end of Doubly Linked List

/**
 * I/P: 10 --> <-- 20 --> <-- 30 --> null
 *      x = 40
 * O/P: 10 --> <-- 20 --> <-- 30 --> <-- 40 --> null
 * 
 * I/P: head = null
 *      x = 40
 * O/P: null <-- 40 --> null
 */


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
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
    temp.prev = curr;
    return head;
}
