// Clone a linked list with random pointer in javascript

/**
 * o The linked is having next as well as random 
 * 
 * I/P: h1 -> 10(Ref 20) -> 5 -> 20(Ref 10) -> 15(Ref 20) -> 20 (Ref15)
 * 
 * O/P: h2 -> 10(Ref 20) -> 5 -> 20(Ref 10) -> 15(Ref 20) -> 20 (Ref15)
 */

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
        this.random = null;
    }
}

let head = new Node(10);
head.next = new Node(5);
head.next.next = new Node(20);
head.next.next.next = new Node(15);
head.next.next.next.next = new Node(20);

head.random = head.next.next;
head.next.next.random = head.next.next.next;
head.next.next.next.next.random = head.next.next.next;


// ========================================================
// Method 1 (Hashing)

/**
 * 1. Create a Map m
 * 2. Do following for every node curr.
 *      m.set(curr, new Node(curr.data));
 *      10  5   20  15  20
 * 
 * 3. Traverse through the list again and do the following:
 *      clone = m.get(curr);
 *      clone.next = m.get(curr.next);
 *      clone.random = m.get(curr.random);
 * 
 * 4. Return m[h1]
 * 
 * Time: Theta(n)
 * Aux Space: O(n)
 */

function cloneListHash(h1) {
    let m = new Map();
    m.set(null, null);

    for(let curr = h1; curr !== null; curr = curr.next) {
        m.set(curr, new Node(curr.data));
    }

    for(let curr = h1; curr !== null; curr = curr.next) {
        let clone = m.get(curr);
        clone.next = m.get(curr.next);
        clone.random = m.get(curr.random);
    }

    return m.get(h1);
}


// let h2 = cloneListHash(head);
// // console.log(h2);

// ================================================
// Without hashing

/**
 * 1 -> 2 -> 3
 * 1 -> 1 -> 2 -> 2 -> 3 -> 3
 * o we will make the nodes replica just after the existing node.
 * o We will add random node in the replica also.
 * o Then will make the clone of the linked list.
 * 
 */

function cloneList (h1) {
    // part 1 --> Insert clone nodes
    let curr = h1;
    while(curr !== null) {
        let next = curr.next;
        curr.next = new Node(curr.data);
        curr.next.next = next;
        curr = next;
    }

    // part 2
    for(let curr = h1; curr !== null; curr = curr.next.next) {
        curr.next.random = (curr.random === null) ? null : curr.random.next;
    }

    // part 3
    let h2 = h1.next, clone = h2;
    for(let curr = h2; curr !== null; curr = curr.next) {
        curr.next = curr.next.next;
        clone.next = clone.next ? clone.next.next : null;
        clone = clone.next;
    }

    return h2;
}

let h2 = cloneList(head);
console.log(h2);
