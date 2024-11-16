// Sorted insert in a singly linked list

/**
 * I/P: 10--> 20--> 30--> 40, x = 25
 * O/P: 10--> 20--> 25--> 30--> 40
 * 
 * I/P: 10--> 25, x = 5
 * O/P: 5--> 10--> 25
 * 
 * I/P: head = null, x = 5
 * O/P: 5
 */

/**
 * Idea for sorted insert
 * 10--> 20--> 30--> 40--> 50
 * x = 45
 * 
 * We will make curr = head.
 * We will check curr.next data is smaller than 45 then curr = curr.next 
 * or if it is greater than we will stop there and map the x accordingly.
 * 
 */


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function sortedInsert (head, x) {
    console.log(x, "===============x")
    let temp = new Node(x);
    if(head === null) {
        return temp;
    }
    if(x < head.data) {
        temp.next = head;
        return temp;
    }
    let curr = head;
    while(curr.next !== null || curr.next.data < x) {
        curr = curr.next;
    }
    temp.next = curr.next;
    curr.next = temp;
    return head;
}

let head = null;
head = sortedInsert(head, 10);
head = sortedInsert(head, 20);
head = sortedInsert(head, 30);
head = sortedInsert(head, 25);
console.log(head);