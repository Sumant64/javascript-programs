// Delete node with only reference given to it.

/**
 * I/P: 10 --> 20 --> 30 --> 40 --> 25
 *                  nodeTDel
 * O/P: 10 --> 20 --> 40 --> 25
 * 
 * Assumptions: 
 * o Node to be deleted is never the last node.
 * o There are at least two nodes.
 */

/**
 * 1. Copy the data of the next node to the nodeToDelete.
 * 2. Then delete the next node.
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

// main function
function deleteNode(nodeToDel) {
    let temp = nodeToDel.next;
    nodeToDel.data = temp.data;
    nodeToDel.next = temp.next;
}


traverse(head);
deleteNode(head.next);
console.log('------------')
traverse(head);