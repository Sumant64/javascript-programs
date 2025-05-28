// Reverse a linked list in group of size k

/**
 * o the k is the set of elemnts in which we need to reverse the linked list.
 * o suppose linked list is of length 7 and k = 3, then we need to reverse
 * in the order like: first 3, next 3 and then the last one.
 * 
 * I/P: 10 --> 20 --> 30 --> 40 --> 50 --> 60
 *      k = 3
 * O/P: 30 --> 20 --> 10 --> 60 --> 50 --> 40
 * 
 * 
 * I/P: 10 --> 20 --> 30 --> 40 --> 50
 *      k = 3
 * O/P: 30 --> 20 --> 10 --> 50 --> 40
 * 
 * 
 * I/P: 10 --> 20 --> 30
 *      k = 4
 * O/P: 30 --> 20 --> 10
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

function traverse(head) {
    let curr = head;
    while(curr !== null) {
        console.log(curr.data);
        curr = curr.next;
    }
}

// =========================================================\
// Recursive Solution:

// Step 1: Reversing First K Nodes Only

/**
 * o Time complexity: Theta(n)
 * o Space Complexity: Theta(n/k)
 * 
 * let curr = head;
 * let prev = null;
 * let count = 1;
 * while(curr !== null && count < k) {
 *      let next = curr.next;
 *      curr.next = prev;
 *      prev = curr;
 *      curr = next;
 *      count += 1;
 * }
 * 
 */

// doubt in this approach:
function reverseRecc(head, k) {
    let curr = head;
    let prev = null;
    let next;
    let count = 1;
    while(curr !== null && count < k) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    if(next !== null) {
        let rem_head = reverseRecc(head, k);
        head.next = rem_head;
    }

    return prev;
}

// console.log(head);

// head = reverseRecc(head, 2);
// console.log(head);

// =======================================================

// Iterative Approach: (efficient solution)

function reverseIter(head, k) {
    let curr = head;
    let prevFirst = null;
    let isFirstPass = true;

    while(curr !== null) {
        let first = curr;
        let prev = null;
        let count = 0;

        while(curr !== null && count < k) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            count++;
        }

        if(isFirstPass) {
            head = prev;
            isFirstPass = false;
        } else {
            prevFirst.next = prev;
        }

        prevFirst = first;
    }
    return head;
}

traverse(head)

head = reverseIter(head, 2);
console.log("---------------------------");
traverse(head);