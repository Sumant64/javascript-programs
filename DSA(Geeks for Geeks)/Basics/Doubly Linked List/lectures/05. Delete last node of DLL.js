// Delete last node of doubly linked list in javascirpt

/**
 * I/P: 10 --> <-- 20 --> <-- 30
 * O/P: 10 --> <-- 20
 * 
 * I/P: 10
 * O/P: null
 * 
 * I/P: null
 * O/P: null
 */

function delLast(head) {
    if(head === null || head.next === null) {
        return null;
    }
    let curr = head;
    while(curr.next !== null) {
        curr = curr.next;
    }
    curr.prev.next = null;
    return head;
}