// Search in a Linked List (iterative & recursive)

/**
 * I/P: 10--> 5--> 20--> 15--> null
 *      x = 20
 * O/P: 3
 * 
 * I/P: 10--> 15--> null
 *      x = 20
 * O/P: -1
 * 
 * I/P: 10--> 20--> 30--> null
 *      x = 10
 * O/P: 1
 */

// Iterative Solution Idea

function search(head, x) {
    let pos = 1;
    let curr = head;
    while(curr !== null) {
        if(curr.data === x) {
            return pos;
        }
        curr = curr.next;
        pos++;
    }
    return -1;
}

/**
 * Dry Run:
 * 10--> 5--> 20--> 30--> null
 * x = 20
 * 
 * Initially: pos = 1, curr = ref(10)
 * Ist : pos = 2, curr = ref(5)
 * IInd : pos = 3, curr = ref(20)
 * IIIrd : return 3
 * 
 * Time: O(n)
 * space: O(1)
 */

//============================================
// Recursive Solution

/**
 * 1. Match with the first node.
 * 2. If does not match, recursively search among the remaining nodes.
 */

function searchRec(head, x) {
    if(head === null) {
        return -1;
    }
    if(head.data === x) {
        return 1;
    }
    let pos = search(head.next, x);
    if(pos === -1) {
        return -1;
    }
    return pos + 1;
}

/**
 * Dry Run:
 * 10--> 5--> 20--> null
 * x =5 
 * 
 * search(ref(10), 5) ---> return 2
 *  --> search(ref(5), 5) --> return 1
 * 
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
