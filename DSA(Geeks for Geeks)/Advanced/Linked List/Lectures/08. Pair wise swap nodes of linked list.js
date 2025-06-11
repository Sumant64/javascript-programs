// Pair Wise Swap nodes of linked list

/**
 * I/P: 1 --> 2 --> 3 --> 4
 * O/P: 2 --> 1 --> 4 --> 3
 * 
 * I/P: 1 --> 2 --> 3 --> 4 --> 5
 * O/P: 2 --> 1 --> 4 --> 3 --> 5
 * 
 * I/P: 1
 * O/P: 1
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(5);
head.next = new Node(20);
head.next.next = new Node(35);
head.next.next.next = new Node(40);

function traverse(head) {
    let curr = head;
    while(curr !== null) {
        console.log(curr.data);
        curr = curr.next;
    }
}

// ==========================================
// Naive Solution (Swapping data)

/**
 * o Time O(n);
 * 
 * o Run a loop while we have at least one node ahead
 * a> swap data of current node with its next node.
 * b> Move current two nodes ahead. 
 *
 */

function pairWiseSwap(head) {
    let curr = head;
    
    while(curr !== null && curr.next !== null) {
        [curr.data, curr.next.data] = [curr.next.data, curr.data];
        curr = curr.next.next;
    }
    return head;
}

// traverse(head);
// console.log('====================');
// head = pairWiseSwap(head);
// traverse(head);

// =============================================================
// Efficient Solution

/**
 * o Idea for the efficient solution
 * [] --> .... x(i-2) --> x(i-1) --> x(i) --> x(i+1) --> x(i+2) --> []
 * 
 * o Before we reach x(i)
 * [] --> .... x(i-1) --> x(i-2)   x(i) --> x(i+1) --> x(i+2) --> []
 *                          prev    curr
 * 
 * [] --> .... x(i-1) --> x(i-2) --> x(i+1) --> x(i)   x(i+2) --> []
 */

function pairWiseSwapEff(head) {
    if(head === null || head.next === null) {
        return head;
    }

    let curr = head.next.next;
    let prev = head;
    head = head.next;
    head.next = prev;

    while(curr !== null && curr.next !== null) {
        prev.next = curr.next;
        prev = curr;
        let next = curr.next.next;
        curr.next.next = curr;
        curr = next;
    }

    prev.next = curr;
    return head;
}

traverse(head);
console.log('====================');
head = pairWiseSwapEff(head);
traverse(head);
