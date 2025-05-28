// Detect loop using Floyd Cycle Detection

/**
 * 1. Initialize: slow = head, fast = head
 * 2. Move slow by one and fast by two until we either reach null
 * or these two meet.
 * 
 * 
 * o Ex: 10 --> 12 --> 15 --> 20 --> 25
 *              |                    |
 *              ---------------------
 *      slow = ref(10), fast = ref(10)
 *      slow = ref(12), fast = ref(15)
 *      slow = ref(15), fast = ref(25)
 *      slow = ref(20), fast = ref(15)
 *      slow = ref(25), fast = ref(25)
 * 
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
// head.next.next.next.next = head.next;


function isLoop(head) {
    let slow = head, fast = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            return true;
        }
    }

    return false;
}

console.log(isLoop(head));