// Middle of linked list in javascript
// for odd list --> one middle element
// for even list --> two middle element in which we will take the after one.

/**
 * I/P: 10--> 5--> 20--> 15--> 25
 * O/P: 20
 * 
 * I/P: 10--> 20--> 30--> 40
 * O/P: 30
 * 
 * I/P: 10
 * O/P: 10
 * 
 * I/P: null
 * O/P:
 */

//=========================================
// method 1
/**
 * 1. count total no of nodes
 * 2. Run a loop [count/2] times.
 * 
 * 10--> 20--> 30--> 40--> 50
 * count = 5
 * 5/2 = 2 --> 0, 1, 2 Index (30)
 * 
 * 10--> 20--> 30--> 40--> 50--> 60
 * count = 6
 */

function findMid(head) {
    if(head === null) {
        return;
    }
    let count = 0;
    for(let curr = head; curr !== null; curr = curr.next) {
        count++;
    }
    let curr = head;
    for(let i = 0; i < Math.floor(count/2); i++) {
        curr = curr.next;
    }
    console.log(curr.data);
}

//==================================================
// Method 2

/**
 * Idea: 
 * o Use two references:
 * a> slow
 * b> fast
 * o Move the fast at double speed. When fast reaches end, slow reaches middle.
 * 
 */

function findMidEff(head) {
    if(head === null) {
        return;
    }
    let slow = head, fast = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(slow.data);
}
