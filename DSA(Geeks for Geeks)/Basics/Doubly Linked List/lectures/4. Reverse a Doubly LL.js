// Reverse a doubly linked list

/**
 * I/P: 10 --> <-- 20 --> <-- 30 --> <-- 40
 * O/P: 40 --> <-- 30 --> <-- 20 --> <-- 10
 * 
 * I/P: 10
 * O/P: 10
 * 
 * I/P: null
 * O/P: null
 */


/**
 * Idea:
 * o We need to play with the prev and next.
 * o We need to swap prev and next of every node.
 */

function reverseDll(head) {
    if(head === null) {
        return head;
    }
    let prev = null, curr = head;
    while(curr !== null) {
        prev = curr;
        [curr.prev, curr.next] = [curr.next, curr.prev];
        curr = curr.prev;
    }
    return prev;
}

