'''
// Reverse a Linked List

/**
 * I/P: 10 --> 20 --> 30 --> 40
 * O/P: 40 --> 30 --> 20 --> 10
 * 
 * I/P: 10 --> 20 --> 30
 * O/P: 30 --> 20 --> 10
 * 
 * I/P: 10
 * O/P: 10
 * 
 * I/P: null
 * O/P: null
 */
'''

'''
// =========================================================
// Efficient Solution Idea

/**
 *  x1 --> x2 --> x3 .... x(i-1) --> x(i) --> x(i+1) --> .... x(n)
 *   After reversing form x1 to xi
 * 
 *  x1 <-- x2 <-- x3 <--.... x(i-1) <-- xi  x(i+1)--> ... x(n)
 *                                     prev  curr
 *  
 *  o we are just making curr.next linked to prev and keep track of the
 * next node
 * 
 * next = curr.next
 * curr.next = prev
 * prev = curr
 * curr = next
 */
'''

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

head = Node(10);
head.next = Node(20);
head.next.next = Node(30);
head.next.next.next = Node(40);


def print_elem(head):
    curr = head
    while curr is not None:
        print(curr.data, end=" ")
        curr = curr.next

    print()


def rev_list_iterative(head):
    curr = head
    prev = None

    while curr is not None:
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    
    return prev

print_elem(head)
head = rev_list_iterative(head)
print_elem(head)


