// Intersection point of two linked list

/**
 * I/P:  1 --> 2 --> 3
 *            ^
 *            5
 * O/P: 2
 * 
 * 
 * I/P: 4 --> 5 --> 7
 *      3 --> 2 
 * O/P: null  
 */

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);

let head2 = new Node(5);
head2.next = head1.next;

// ==========================================
// Method 1 (hashing)

/**
 * o add the first linked list in the map
 * o then traverse the second linked list and check matching node, 
 * if there then return as intersection point.
 */


const intersectionHash = (head) => {

}


// ===========================================
// Method 2 --> without using extra space

/**
 * o We will calculate the length of both linked list
 * o We will find the absolute difference between two.
 * o Then in the big linked list we will move the difference number ahead,
 * and the next node will be the intersection node.
 */

class Solution {
    // function to find the intersection of two linked lists.
    intersectPoint(head1, head2) {
        //helper function to calcuate the length of a linked list
        const getLength = (head) => {
            let length = 0;
            let current = head;
            while(current) {
                length++;
                current = current.next;
            }
            return length;
        }

        // Get the lengths of both linked lists
        const len1 = getLength(head1);
        const len2 = getLength(head2);

        // Calculate the difference in lengths
        let diff = Math.abs(len1 - len2);

        // Align the starting point of the longer list
        let longer = len1 > len2 ? head1 : head2;
        let shorter = len1 > len2 ? head2 : head1;

        while(diff > 0) {
            longer = longer.next;
            diff--;
        }

        // Traverse both lists together to find the intersection point
        while (longer && shorter) {
            if(longer === shorter) {
                return longer.data; // intersection node
            }
            longer = longer.next;
            shorter = shorter.next;
        }

        // No intersection found
        return -1;
    }
}

let obj = new Solution();
let res = obj.intersectPoint(head1, head2);
console.log(res);
