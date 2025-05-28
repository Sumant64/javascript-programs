// Reverse a Linked List

/**
 * I/P: 10 --> 20 --> 30 --> 40
 * O/P: 40 --> 30 --> 20 --> 10
 * 
 * I/P: 10 --> 20 --> 30
 * O/P: 30 --> 20 --> 10
 * 
 * I/P: 10
 * O/P: 10
 * 
 * I/P: null
 * O/P: null
 */

// ========================================
// Naive Solution

/**
 * 1. Copy data of nodes into an array
 *  10 --> 20 --> 30
 * 
 *  arr [10, 20, 30]
 * 
 * 2. Traverse the array from end, and one by one copy data back
 *      30 --> 20 --> 10
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

function revList(head) {
    let arr = [];

    for(let curr = head; curr !== null; curr = curr.next) {
        arr.push(curr.data);
    }

    for(let curr = head; curr !== null; curr = curr.next) {
        curr.data = arr.pop();
    }

    return head;
}

// head = revList(head);
// console.log(head);

// =========================================================
// Efficient Solution Idea

/**
 *  x1 --> x2 --> x3 .... x(i-1) --> x(i) --> x(i+1) --> .... x(n)
 *   After reversing form x1 to xi
 * 
 *  x1 <-- x2 <-- x3 <--.... x(i-1) <-- xi  x(i+1)--> ... x(n)
 *                                     prev  curr
 *  
 *  o we are just making curr.next linked to prev and keep track of the
 * next node
 * 
 * next = curr.next
 * curr.next = prev
 * prev = curr
 * curr = next
 */

function revListIterative(head) {
    let curr = head;
    let prev = null;

    while(curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
console.log(head)
head = revListIterative(head);
console.log(head);