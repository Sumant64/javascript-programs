'''
// Find nth node from end of the Linked List

/**
 * 
 * I/P: 10 --> 20 --> 30 --> 40 --> 50
 *      n = 2
 * O/P: 40
 * 
 * I/P: 10 --> 20 --> 30
 *      n = 3
 * O/P: 10
 * 
 * I/P: 10 --> 20
 *      n = 3
 * O/P: 
 * 
 * I/P: 10 --> 20 --> 30
 *      n = 1
 * O/P: 30
 */
'''

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

head = Node(10)
head.next = Node(20)
head.next.next = Node(30)
head.next.next.next = Node(40)

# ====================================
'''
// Method 1: Using length of linked list
/**
 * ex: 10 --> 20 --> 30 --> 40 --> 50
 *  n = 2 (ans : 40)
 * 
 * o length = 5
 * we will traverse through (length - n + 1) th node then we will find the end
 * o 5 - 2 + 1 = 4th node from start will be the answer i.e. 40
 * o 
 */
'''

def print_nth_end(head, n):
    len = 0
    curr = head
    while curr is not None:
        len += 1
        curr = curr.next
    
    if len < n:
        return
    
    curr = head
    
    for _ in range(1, len - n + 1):
        curr = curr.next
    
    print(curr.data)


# print_nth_end(head, 1)

# =====================================
'''
// Method 2 (Using Two Pointers (reference))

/**
 *   10 --> 20 --> 30 --> 40 --> 50 --> 60 --> 70
 *  second               first
 *      n = 3
 * o Move 'first' n position ahead.
 * o Start 'second' pointer from head.
 * o Move both 'first' and 'second' at same speed. When 'first' 
 * reaches NULL, second reaches the required node.
 * o Time complexity: Theta(len)
 * o Space: theta(1)
 */
'''

def print_nth_end_eff(head, n):
    if head is None:
        return
    
    first = head
    i = 0
    while i < n:
        if first is None:
            return
        first = first.next
        i += 1

    second = head
    while first is not None:
        first = first.next
        second = second.next

    print(second.data)

print_nth_end_eff(head, 2)