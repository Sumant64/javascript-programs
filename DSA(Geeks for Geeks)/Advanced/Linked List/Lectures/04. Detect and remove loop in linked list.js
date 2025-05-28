// Detect and remove loop in linked list

/**
 * I/P: 10 --> 15 --> 12 --> 20
 *             |             |
 *              -------------
 * O/P: 10 --> 15 --> 12 --> 20
 * 
 * 
 * I/P: 10 (connected with itself)
 * O/P: 10
 * 
 * I/P: 10 --> 20 --> 30
 * O/P: 10 --> 20 --> 30
 * 
 */


// =========================================
// Other methods
/**
 * Use of the following solutions to detect the loop and remove it:
 * 1. O(n^2) Naive Solution
 * 2. O(n) Solution that modifies node structure
 * 3. O(n) Time and O(n) Aux space Hash set solution
 */

// ========================================
// Efficient Solution: Using Floyd's Algorithm

/**
 * 1. Detect loop using Floyd's Algorithm
 * 2. Move slow to the beginning i.e. head.
 * 3. Now move slow and fast at the same speed. They will meet at the 
 * beginning of the loop.
 * 
 * o So we will check for slow.next and fast.next, where they will meet
 * is the intersection of the node. So we will make fast.next as null.
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
head.next.next.next.next = head.next;

function traverse(head) {
    let curr = head;
    while(curr !== null) {
        console.log(curr.data);
        curr = curr.next;
    }
}

function detectRemoveLoop(head) {
    let slow = head, fast = head;
    
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) break;
    }

    if(slow !== fast) return;

    slow = head;
    while(slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = null;
}

// traverse(head); // never ending loop

detectRemoveLoop(head);
traverse(head);