// Palindrome linked list

/**
 * Steps:
 * 1. We will find the middle (if 2 middle then first middle)
 * 2. Then after the middle node, assign new head to the next node
 * There will be then two linked list.
 * 3. reverse the second list 
 * 4. Traverse both the list and if dissimilar elements are return false, else true.
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(20);
head.next.next.next = new Node(10);

class Solution {
    // functions to check whether the list is palindrome.

    middleElement(head) {
        let slow = head;
        let fast = head;

        while(fast !== null && fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;
    }

    reverseList(revHead) {
        let prev = null;
        let temp = revHead;

        while(temp !== null) {
            let next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }   
        revHead = prev;

        return revHead;
    }


    isPalindrome(head) {
        if(head === null) {
            return false;
        }

        if(head.next === null) {
            return true;
        }

        let mid = this.middleElement(head);
        let revHead = mid.next;

        mid.next = null;
        revHead = this.reverseList(revHead);

        // check for the palindrome
        while(head !== null && revHead !== null) {
            if(head.data !== revHead.data) {
                return false;
            }

            head = head.next;
            revHead = revHead.next;
        }

        return true;
    }
}

let obj = new Solution();
console.log(obj.isPalindrome(head));