// Insert at the given position in Singly Linked List

/**
 * I/P: 10--> 50--> 70--> 90--> null
 *      pos = 2, data = 20
 * O/P: 10--> 20--> 50--> 70--> 90--> null
 * 
 * I/P: 10--> 20--> null
 *      pos = 3, data = 30
 * O/P: 10--> 20--> 30--> null
 * 
 * I/P: 10--> 20--> null
 *      pos = 1, data = 30
 * O/P: 30--> 10--> 20
 * 
 * I/P: 10--> null
 *      pos = 3, data = 5
 * O/P: null
 * 
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertPos(head, pos, data) {
    let temp = new Node(data);
    if(pos === 1) {
        temp.next = head;
        return temp;
    }

    let curr = head;
    for(let i = 1; i <= pos-2 && curr != null; i++) {
        curr = curr.next;
    }
    if(curr === null) {
        return head;
    }
    temp.next = curr.next;
    curr.next = temp;
    return head;
}
let head = null;
head = insertPos(head, 1, 10);
head = insertPos(head, 2, 20);
head = insertPos(head, 3, 30);
console.log(head);
