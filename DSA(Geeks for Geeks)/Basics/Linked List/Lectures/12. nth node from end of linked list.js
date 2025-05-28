// Find nth node from end of the Linked List

/**
 * 
 * I/P: 10 --> 20 --> 30 --> 40 --> 50
 *      n = 2
 * O/P: 40
 * 
 * I/P: 10 --> 20 --> 30
 *      n = 3
 * O/P: 10
 * 
 * I/P: 10 --> 20
 *      n = 3
 * O/P: 
 * 
 * I/P: 10 --> 20 --> 30
 *      n = 1
 * O/P: 30
 */
 
// -------------------------------------------------
// Method 1: Using length of linked list
/**
 * ex: 10 --> 20 --> 30 --> 40 --> 50
 *  n = 2 (ans : 40)
 * 
 * o length = 5
 * we will traverse through (length - n + 1) th node then we will find the end
 * o 5 - 2 + 1 = 4th node from start will be the answer i.e. 40
 * o 
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

function printNthEnd(head, n) {
    let len = 0;
    for(let curr = head; curr !== null; curr = curr.next) {
        len += 1;
    }

    if(len < n) return;

    let curr = head;
    for(let i = 1; i < (len - n + 1); i++) {
        curr = curr.next;
    }

    console.log(curr.data);
}



printNthEnd(head, 2)

// ===========================================================
// Method 2 (Using Two Pointers (reference))

/**
 *   10 --> 20 --> 30 --> 40 --> 50 --> 60 --> 70
 *  second               first
 *      n = 3
 * o Move 'first' n position ahead.
 * o Start 'second' pointer from head.
 * o Move both 'first' and 'second' at same speed. When 'first' 
 * reaches NULL, second reaches the required node.
 * o Time complexity: Theta(len)
 * o Space: theta(1)
 */


function printNthEndEff (head, n) {
    if(head === null) return;

    let first = head;
    for (let i = 0; i < n; i++) {
        if(first === null) return;
        first = first.next;
    }
    let second = head;
    while(first !== null) {
        first = first.next;
        second = second.next;
    }

    console.log(second.data);
}

printNthEndEff(head, 2)
