// Segregate Even and Odd Nodes

/**
 * I/P: 17 --> 15 --> 8 --> 12 --> 5
 * O/P: 8 --> 12 --> 17 --> 15 --> 5
 * 
 * I/P: 8 --> 12 --> 10
 * O/P: 8 --> 12 --> 10
 * 
 * I/P: 3 --> 5 --> 1
 * O/P: 3 --> 5 --> 1
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

// =======================================
// Naive solution: (Requires Two Traversal)

/**
 * 1. Find the last node reference/pointer by doing a traversal.
 * 2. Traverse the linked list again. For every odd node, 
 * insert it after the last node and make the newly inserted node 
 * as the new last node.
 */

// =======================================
// Efficient Method:

/**
 * o Idea for the one traversal solution
 * 
 * o We maintian 4 variables:
 * es --> Reference/ pointer to start of the even sublist
 * ee --> reference/pointer to end of the even sublist
 * os --> reference/pointer to start of the odd sublist
 * oe --> reference/pointer to end of the odd sublist
 * 
 * All of the above are initialized as null/none
 * 
 * While traversing:
 * a> If current node is even, we insert it after ee and update ee. 
 * Also update es if this is the first node.
 * 
 * b> Similar to (a) for odd nodes. After the loop, correct the two lists
 * 
 */



function segregate(head) {
    let es = null, ee = null, os = null, oe = null;
    for(let curr = head; curr !== null; curr = curr.next) {
        let x = curr.data;
        if(x % 2 === 0) {
            if(es === null) {
                es = ee = curr;
            } else {
                ee.next = curr; 
                ee = curr;
            }
        } else {
            if(os === null) {
                os = oe = curr;
            } else {
                oe.next = curr;
                oe = curr;
            }
        }
    }

    if(os === null || es === null) {
        return head;
    }

    ee.next = os;
    oe.next = null;
    return es;
}

traverse(head);
console.log("=====================");
head = segregate(head);
traverse(head);