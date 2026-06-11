'''
// Search in a Linked List (iterative & recursive)

/**
 * I/P: 10--> 5--> 20--> 15--> null
 *      x = 20
 * O/P: 3
 * 
 * I/P: 10--> 15--> null
 *      x = 20
 * O/P: -1
 * 
 * I/P: 10--> 20--> 30--> null
 *      x = 10
 * O/P: 1
 */
'''

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def print_elem(head):
    curr = head
    while curr is not None:
        print(curr.data, end = " ")
        curr = curr.next

    print()

# =============================================
# Iterative Solution
def search_iterative(head, x):
    pos = 1
    curr = head
    while curr is not None:
        if curr.data == x:
            return pos
        
        curr = curr.next
        pos += 1
    
    return -1

head = Node(10)
head.next = Node(20)
head.next.next = Node(30)
head.next.next.next = Node(40)

# print(search_iterative(head, 20))

# ==============================================
'''
// Recursive Solution

/**
 * 1. Match with the first node.
 * 2. If does not match, recursively search among the remaining nodes.
 */
'''

def search_rec(head, x):
    if head is None:
        return -1
    
    if head.data == x:
        return 1
    
    pos = search_rec(head.next, x)
    if pos == -1:
        return -1
    
    return pos + 1
    
print(search_rec(head, 30))